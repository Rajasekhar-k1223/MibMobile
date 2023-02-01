import {Text} from '@react-native-material/core';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  AsyncStorage,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
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
import {Dimensions} from 'react-native';
import {useOrientation} from './useOrientation';
import Feed from './Feed';
import { config } from '../../config';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const axios = require('axios').default;
export default function Userpage() {
  const orientation = useOrientation();
  const [Feeds, setFeeds] = React.useState<any>([]);
  const [Limit, setLimit] = useState(10);
  const [Page, setPage] = useState(0);
  useEffect(() => {
    StatusBar.setBackgroundColor('#3c2d52');
    StatusBar.setTranslucent(true);
      const fetchdata = async () => {
      const userToken = await AsyncStorage.getItem('Token');
      const paramsData = {
        page: Page,
        SetLimit: Limit,
      };
      const d = await axios.post(
        'http://' + config.ip + ':' + config.port + '/api/feeds',
        paramsData,
        {
          timeout: 6000,
          headers: {
            Authorization: 'Bearer ' + userToken,
          },
        },
      );
      const f = await d.data;
      //  console.log(await f.data, '        first Data');
      //    return false;
      setFeeds(await f.data);
      {
        f.data === undefined ? fetchdata() : 'hello';
      }
      // console.log(userData,"     check console")
    };
    // const fetchUserdata = async () => {
    //   const userId = 1;
    //   const ud = await axios.get(
    //     'http://192.168.55.105:8000/api/getUser/'+userId, {timeout:3000}
    //   );
    //   const y = ud.data;
    //   y.map((user)=>console.log(user.userName));
    //  // setdata(ud.data);
    //   //console.log(y.responseData);
    //   console.log("UserData");
    //   {ud.data === undefined ? fetchUserdata(): "hello" }
    //  // console.log(userData,"     check console")
    // };
    fetchdata();
  }, []);

  type ItemProps = {title: any};
  const renderFeed = React.useCallback(
    // ({ item }) => <Text style={{ color: "#000", padding: 5, margin: 2,backgroundColor:"skyblue"}}>{item.header['color']}</Text>,
    ({item}: {item: any}) => <Feed item={item} />,
    [],
  );
  // const renderFeed = (Feed: any) => {
  //   return (
  //     <View
  //       style={
  //         (styles.shadow,
  //         {width: orientation === 'LANDSCAPE' ? '48.6%' : '97.2%'})
  //       }>
  //       <Image
  //         source={loginPageEmail}
  //         style={{
  //           width: '100%',
  //           height: 250,
  //           borderTopRightRadius: 5,
  //           borderTopLeftRadius: 5,
  //         }}
  //       />
  //       <View
  //         style={{
  //           width: '100%',
  //           flexDirection: 'row',
  //           justifyContent: 'space-between',
  //         }}>
  //         <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 5}}>
  //           <Image
  //             source={loginPageEmail}
  //             style={{width: 25, height: 25, borderRadius: 15}}
  //           />
  //           <Text style={{marginLeft: 5, lineHeight: 25}}>Rajaskehar</Text>
  //         </View>
  //         <Icon
  //           name="dots-three-vertical"
  //           size={20}
  //           style={{marginRight: 10, marginTop: 10}}
  //         />
  //       </View>
  //       <Text style={{padding: 10}}>{Feed.FeedId}</Text>
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           justifyContent: 'space-between',
  //           padding: 15,
  //         }}>
  //         <AntDesign
  //           name="heart"
  //           size={20}
  //           style={{marginRight: 10, marginTop: 10}}
  //         />
  //         <Icon
  //           name="emoji-happy"
  //           size={20}
  //           style={{marginRight: 10, marginTop: 10}}
  //         />
  //         <FontAwesome
  //           name="comments"
  //           size={20}
  //           style={{marginRight: 10, marginTop: 10}}
  //         />
  //         <Icon
  //           name="info-with-circle"
  //           size={20}
  //           style={{marginRight: 10, marginTop: 10}}
  //         />
  //         <MaterialCommunityIcons
  //           name="share"
  //           size={20}
  //           style={{marginRight: 10, marginTop: 10}}
  //         />
  //       </View>
  //     </View>
  //   );
  // };
  return (
    // <SafeAreaView
    //   style={{
    //     backgroundColor: '#fff',
    //     width: '100%',
    //     height: '100%',
    //     padding: 2,
    //   }}>
    <>
      <ScrollView>
        <View
          style={
            (styles.container,
            {flexDirection: orientation === 'LANDSCAPE' ? 'row' : 'column'})
          }>
          <FlatList
            data={Feeds}
            renderItem={renderFeed}
            removeClippedSubviews={true} // Unmount components when outside of window
            initialNumToRender={10} // Reduce initial render amount
            maxToRenderPerBatch={1} // Reduce number in each render batch
            updateCellsBatchingPeriod={100} // Increase time between renders
            windowSize={7} // Reduce the window size
            // onEndReached={e => {
            //   // Append data
            //   console.log(e);
            //   loadMoreFeeds();
            // }}
            // keyExtractor={item => item.feedId}
          />
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
    </>
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
    //width:windowWidth > 1000?windowWidth/3:windowWidth/2

    //flex:10
  },
  container: {
    flex: 0,
    padding: 5,
    flexWrap: 'wrap',
  },
});
