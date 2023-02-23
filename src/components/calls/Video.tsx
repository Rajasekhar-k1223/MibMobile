// import {View, Text} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Alert, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import {Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Draggable from 'react-native-draggable';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-paper';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import InCallManager from 'react-native-incall-manager';

import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals,
} from 'react-native-webrtc';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  hangup: () => void;
  localStream?: MediaStream | null;
  remoteStream?: MediaStream | null;
}

function ButtonContainer(props: Props) {
  return (
    <View>
      <Text onPress={props.hangup}>Video</Text>
    </View>
  );
}
export default function Video(props: Props) {
  let navigation = useNavigation();
  let name;
  let connectedUser;
  const [userId, setUserId] = useState(25);
  const [socketActive, setSocketActive] = useState(false);
  const [calling, setCalling] = useState(false);

  const [accept, setaccept] = useState(false);
  // Video Scrs
  const [localStream, setLocalStream] = useState({toURL: () => null});
  const [remoteStream, setRemoteStream] = useState({toURL: () => null});
  const [conn, setConn] = useState(new WebSocket('ws://3.20.188.26:8080'));
  const [yourConn, setYourConn] = useState(
    //change the config as you need
    new RTCPeerConnection({
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302',
        },
        {
          urls: 'stun:stun1.l.google.com:19302',
        },
        {
          urls: 'stun:stun2.l.google.com:19302',
        },
      ],
    }),
  );

  const [offer, setOffer] = useState(null);

  const [callToUsername, setCallToUsername] = useState(null);

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('userId').then(id => {
        console.log(id);
        if (id) {
          setUserId(id);
          onCall();
        } else {
          setUserId('');
          navigation.push('Login');
        }
      });
    }, [userId]),
  );

  useEffect(() => {
    navigation.setOptions({
      title: 'Your ID - ' + userId,
      headerRight: () => (
        <Button mode="text" onPress={onLogout} style={{paddingRight: 10}}>
          Logout
        </Button>
      ),
    });
  }, [userId]);

  /**
   * Calling Stuff
   */

  useEffect(() => {
    if (socketActive && userId.length > 0) {
      try {
        InCallManager.start({media: 'audio'});
        InCallManager.setForceSpeakerphoneOn(true);
        InCallManager.setSpeakerphoneOn(true);
      } catch (err) {
        console.log('InApp Caller ---------------------->', err);
      }

      console.log(InCallManager);

      send({
        type: 'login',
        name: userId,
      });
    }
  }, [socketActive, userId]);

  const onLogin = () => {};

  useEffect(() => {
    /**
     *
     * Sockets Signalling
     */
    conn.onopen = () => {
      console.log('Connected to the signaling server');
      setSocketActive(true);
    };
    //when we got a message from a signaling server
    conn.onmessage = msg => {
      let data;
      if (msg.data === 'Hello world') {
        data = {};
      } else {
        data = JSON.parse(msg.data);
        console.log('Data --------------------->', data);
        switch (data.type) {
          case 'login':
            console.log('Login');
            break;
          //when somebody wants to call us
          case 'offer':
            handleOffer(data.offer, data.name);
            console.log('Offer');
            break;
          case 'answer':
            handleAnswer(data.answer);
            console.log('Answer');
            break;
          //when a remote peer sends an ice candidate to us
          case 'candidate':
            handleCandidate(data.candidate);
            console.log('Candidate');
            break;
          case 'leave':
            handleLeave();
            console.log('Leave');
            break;
          default:
            break;
        }
      }
    };
    conn.onerror = function (err) {
      console.log('Got error', err);
    };
    /**
     * Socjket Signalling Ends
     */

    let isFront = false;
    mediaDevices.enumerateDevices().then(sourceInfos => {
      let videoSourceId;
      for (let i = 0; i < sourceInfos.length; i++) {
        const sourceInfo = sourceInfos[i];
        if (
          sourceInfo.kind == 'videoinput' &&
          sourceInfo.facing == (isFront ? 'front' : 'environment')
        ) {
          videoSourceId = sourceInfo.deviceId;
        }
      }
      mediaDevices
        .getUserMedia({
          audio: true,
          video: {
            mandatory: {
              minWidth: 500, // Provide your own width, height and frame rate here
              minHeight: 300,
              minFrameRate: 30,
            },
            facingMode: isFront ? 'user' : 'environment',
            optional: videoSourceId ? [{sourceId: videoSourceId}] : [],
          },
        })
        .then(stream => {
          // Got stream!
          setLocalStream(stream);

          // setup stream listening
          yourConn.addStream(stream);
        })
        .catch(error => {
          // Log error
        });
    });

    yourConn.onaddstream = event => {
      console.log('On Add Stream', event);
      setRemoteStream(event.stream);
    };

    // Setup ice handling
    yourConn.onicecandidate = event => {
      if (event.candidate) {
        send({
          type: 'candidate',
          candidate: event.candidate,
        });
      }
    };
  }, []);

  const send = message => {
    //attach the other peer username to our messages
    if (connectedUser) {
      message.name = connectedUser;
      console.log('Connected iser in end----------', message);
    }

    conn.send(JSON.stringify(message));
  };

  const onCall = () => {
    setCalling(true);

    connectedUser = callToUsername;
    console.log('Caling to', callToUsername);
    // create an offer

    yourConn.createOffer().then(offer => {
      yourConn.setLocalDescription(offer).then(() => {
        console.log('Sending Ofer');
        console.log(offer);
        send({
          type: 'offer',
          offer: offer,
        });
        // Send pc.localDescription to peer
      });
    });
  };

  //when somebody sends us an offer
  const handleOffer = async (offer, name) => {
    console.log(name + ' is calling you.');

    console.log('Accepting Call===========>', offer);
    connectedUser = name;

    try {
      await yourConn.setRemoteDescription(new RTCSessionDescription(offer));

      const answer = await yourConn.createAnswer();

      await yourConn.setLocalDescription(answer);
      send({
        type: 'answer',
        answer: answer,
      });
    } catch (err) {
      console.log('Offerr Error', err);
    }
  };

  //when we got an answer from a remote user
  const handleAnswer = answer => {
    yourConn.setRemoteDescription(new RTCSessionDescription(answer));
  };

  //when we got an ice candidate from a remote user
  const handleCandidate = candidate => {
    setCalling(false);
    console.log('Candidate ----------------->', candidate);
    yourConn.addIceCandidate(new RTCIceCandidate(candidate));
  };

  //hang up
  const hangUp = () => {
    send({
      type: 'leave',
    });

    handleLeave();
  };

  const handleLeave = () => {
    connectedUser = null;
    setRemoteStream({toURL: () => null});

    yourConn.close();
    // yourConn.onicecandidate = null;
    // yourConn.onaddstream = null;
  };

  const onLogout = () => {
    // hangUp();

    AsyncStorage.removeItem('userId').then(res => {
      navigation.push('Login');
    });
  };

  const acceptCall = async () => {
    console.log('Accepting Call===========>', offer);
    connectedUser = offer.name;

    try {
      await yourConn.setRemoteDescription(new RTCSessionDescription(offer));

      const answer = await yourConn.createAnswer();

      await yourConn.setLocalDescription(answer);

      send({
        type: 'answer',
        answer: answer,
      });
    } catch (err) {
      console.log('Offerr Error', err);
    }
  };
  const rejectCall = async () => {
    send({
      type: 'leave',
    });
    ('');
    setOffer(null);

    handleLeave();
  };

  if (props.localStream && !props.remoteStream) {
    return (
      <View>
        <RTCView streamURL={props.localStream.toURL()} objectFit={'cover'}>
          <ButtonContainer hangup={props.hangup} />
        </RTCView>
      </View>
    );
  }
  if (props.localStream && !props.remoteStream) {
    return (
      <View>
        <RTCView streamURL={props.remoteStream.toURL()} objectFit={'cover'}>
          <ButtonContainer hangup={props.hangup} />
        </RTCView>
        <RTCView streamURL={props.localStream.toURL()} objectFit={'cover'}>
          <ButtonContainer hangup={props.hangup} />
        </RTCView>
      </View>
    );
  }
  // return ;
  // }
  return (
    // <View style={styles.root}>
    <>
      {/* <View style={styles.inputField}>
        <TextInput
          label="Enter Friends Id"
          mode="outlined"
          style={{marginBottom: 7}}
          onChangeText={text => setCallToUsername(text)}
        />
        <Button
          mode="contained"
          onPress={onCall}
          loading={calling}
          //   style={styles.btn}
          contentStyle={styles.btnContent}
          disabled={!(socketActive && userId.length > 0)}>
          Call
        </Button>
      </View> */}
      <View style={styles.videoContainer}>
        <View style={[styles.videos, styles.localVideos]}>
          {/* <Text>Your Video</Text> */}
          <RTCView streamURL={localStream.toURL()} style={styles.localVideo} />
          {/* <View
            style={{
              position: 'absolute',
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.1)',
              width: '100%',
              height: 60,
              padding: 5,
              flexDirection: 'row',
            }}> */}
          {/* <Icon name="call" size={40} style={{color: 'red'}} />
          <Icon name="call" size={40} style={{color: 'red'}} />
          <Icon name="call" size={40} style={{color: 'red'}} />
          <Icon name="call" size={40} style={{color: 'red'}} />
          <Icon name="call" size={40} style={{color: 'red'}} />
          <Icon name="call" size={40} style={{ color: 'red' }} /> */}
          <View
            style={{
              alignItems: 'center',
            }}>
            {accept === true ? (
              <Icon
                name="call"
                size={40}
                style={{
                  color: 'green',
                  position: 'absolute',
                  bottom: 0,
                  elevation: 2,
                  borderWidth: 2,
                  borderColor: 'red',
                }}
              />
            ) : (
              // <TouchableOpacity
              //   onPress={() => {
              //     // navigation.push('ChatView');
              //     navigation.canGoBack();
              //   }}
              //   style={{
              //     position: 'absolute',
              //     bottom: 75,
              //     width: 100,
              //     height: 100,
              //   }}>
              <Icon
                name="call"
                size={40}
                style={{
                  color: 'red',
                  position: 'absolute',
                  bottom: 75,
                  elevation: 5,
                  borderWidth: 2,
                  borderColor: '#494949',
                  padding: 15,
                  borderRadius: 60,
                }}
                onPress={() => {
                  // navigation.push('ChatView');
                  // alert('hello');
                  navigation.dispatch('ChatView');
                }}
              />
              // </TouchableOpacity>
            )}
          </View>
          {/* <ButtonContainer hangup={props.hangup} /> */}
          {/* </View> */}
        </View>
        {accept === true ? (
          <Draggable x={410} y={700} maxX={411} maxY={701}>
            {/* minX={210} minY={270} */}
            <View style={[styles.videos, styles.remoteVideos]}>
              {/* <Text>Friends Video</Text> */}
              <RTCView
                streamURL={remoteStream.toURL()}
                style={styles.remoteVideo}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  width: '100%',
                  height: 60,
                  padding: 5,
                  flexDirection: 'row',
                }}>
                {/* <Icon name="call" size={40} style={{color: 'red'}} />
          <Icon name="call" size={40} style={{color: 'red'}} />
          <Icon name="call" size={40} style={{color: 'red'}} />
          <Icon name="call" size={40} style={{color: 'red'}} />
          <Icon name="call" size={40} style={{color: 'red'}} />
          <Icon name="call" size={40} style={{ color: 'red' }} /> */}
                {accept === true ? (
                  <Icon name="call" size={40} style={{color: 'red'}} />
                ) : (
                  <Icon name="call" size={40} style={{color: 'red'}} />
                )}
                <ButtonContainer hangup={props.hangup} />
              </View>
            </View>
          </Draggable>
        ) : null}
        {/* <View
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.1)',
            width: '100%',
            height: 60,
            padding: 5,
            flexDirection: 'row',
          }}>

          {accept === true ? (
            <Icon name="call" size={40} style={{color: 'red'}} />
          ) : (
            <Icon name="call" size={40} style={{color: 'red'}} />
          )}
          <ButtonContainer hangup={props.hangup} />
        </View> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    //  backgroundColor: '#fff',
    flex: 1,
    // padding: 20,
  },
  inputField: {
    marginBottom: 10,
    flexDirection: 'column',
  },
  videoContainer: {
    flex: 1,
    minHeight: 10,
  },
  videos: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',

    borderRadius: 6,
  },
  localVideos: {
    height: Dimensions.get('window').height,
    margin: 0,
    width: Dimensions.get('window').width,
    // marginBottom: 10,
  },
  remoteVideos: {
    height: 250,
    position: 'absolute',
    bottom: 0,
    borderRadius: 5,
    width: 200,
    margin: 5,
    right: 0,
    elevation: 5,
    // backgroundColor: 'red',
  },
  localVideo: {
    backgroundColor: '#000',
    height: Dimensions.get('window').height + 50,
    width: Dimensions.get('window').width + 40,
    marginTop: 25,
    padding: 0,
  },
  remoteVideo: {
    backgroundColor: 'red',
    height: '100%',
    //  width: 200,
    // position: 'absolute',
  },
});
