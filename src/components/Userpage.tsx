import {Text} from '@react-native-material/core';
import React, {useEffect} from 'react';
import {Image, ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import loginPageEmail from '../assets/imgs/64666.jpg';
import loginPageSocaial from '../assets/imgs/5551.jpg';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import loginMailIcon from '../assets/imgs/email.png';
import loginMailHome from '../assets/imgs/home.png';
import loginMailBlog from '../assets/imgs/blog.png';
export default function Userpage() {
  useEffect(() => {
    StatusBar.setBackgroundColor('#3c2d52');
    StatusBar.setTranslucent(true);
  }, []);
  return (
    // <SafeAreaView
    //   style={{
    //     backgroundColor: '#fff',
    //     width: '100%',
    //     height: '100%',
    //     padding: 2,
    //   }}>
    <View style={{flex: 1, flexDirection: 'column'}}>
      <ScrollView style={styles.container}>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="info-with-circle"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <MaterialCommunityIcons
              name="share"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <AntDesign
              name="heart"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="emoji-happy"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <FontAwesome
              name="comments"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10, marginTop: 10}}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageSocaial}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={styles.shadow}>
          <Image
            source={loginPageEmail}
            style={{
              width: '100%',
              height: 250,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
              <Image
                source={loginPageEmail}
                style={{width: 25, height: 25, borderRadius: 15}}
              />
              <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
            </View>
            <Icon
              name="dots-three-vertical"
              size={20}
              style={{marginRight: 10}}
            />
          </View>
          <Text style={{padding: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Image source={loginMailIcon} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
            <Image source={loginMailHome} style={{width: 25, height: 25}} />
            <Image source={loginMailBlog} style={{width: 25, height: 25}} />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          flexDirection: 'row',
          width: '100%',
          height: '10%',
          marginTop: 5,
          position: 'absolute',
          bottom: 10,
          right: 0,
          alignItems: 'flex-end',
          paddingRight: 10,
        }}>
        <Image source={loginMailIcon} style={{width: 45, height: 45}} />
      </View>
    </View>
    // </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  shadow: {
    borderRadius: 4,
    margin: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 5,
  },
});
