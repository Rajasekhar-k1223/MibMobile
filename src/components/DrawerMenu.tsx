import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
// import Profile from './Profile';
// import Home from './Home';
// import {responsiveFontSize} from 'react-native-responsive-dimensions';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {config} from '../config';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Drawer = createDrawerNavigator();
// const CustomDrawerContent: FC<CustomDrawerContentProps> = props => (
//   <DrawerContentScrollView {...props}>
//     <View style={styles.profileView}>
//       <Image
//         source={props.userPhoto}
//         resizeMode="contain"
//         style={styles.profilePhoto}
//       />
//       <Text style={styles.profileUserName}>{props.userName}</Text>
//       <Text style={styles.profileEmail}>{props.userEmail}</Text>
//     </View>
//     <DrawerItemList {...props} />
//     <DrawerItem label="Sign Out" onPress={props.signOut} />
//   </DrawerContentScrollView>
// );
export default function DrawerMenu(props: any) {
  const logout = async () => {
    // var userToken = await AsyncStorage.getItem('Token');
    // const ud = await axios.get(
    //   'http://' + config.ip + ':' + config.port + '/api/logout/',
    //   {
    //     headers: {
    //       Authorization: 'Bearer ' + userToken,
    //     },
    //   },
    // );
    // if ((await ud.data) != '' || (await ud.data) != null) {
    //   console.log(ud.data);
    //   // await AsyncStorage.removeItem('Token');
    //   // await AsyncStorage.removeItem('UserId');
    //   // props.navigation.navigate('login');
    //   //props.navigation.navigate.goBack();
    // }
    // .then(
    //   (
    //     response, //props.navigation.navigate('login')
    //   ) => {
    //     console.log(response);
    //   },
    // );
  };
  return (
    <View
      style={{
        justifyContent: 'flex-end',
        marginTop: 15,
        flexDirection: 'column',
      }}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        <Fontisto name="email" size={35} style={{margin: 10}} />
        <Fontisto name="email" size={35} style={{margin: 10}} />
        <Fontisto name="email" size={35} style={{margin: 10}} />
        <Fontisto name="email" size={35} style={{margin: 10}} />
        <Fontisto name="email" size={35} style={{margin: 10}} />
        <Fontisto name="email" size={35} style={{margin: 10}} />
        <Fontisto name="email" size={35} style={{margin: 10}} />
        <Fontisto name="email" size={35} style={{margin: 10}} />
        <Fontisto name="email" size={35} style={{margin: 10}} />
      </View>

      {/* <TouchableOpacity
        style={{
          marginVertical: 10,
          justifyContent: 'center',
          marginLeft: 15,
        }}
        onPress={() => {
          props.navigation.navigate('Dashboard');
          props.navigation.dispatch(DrawerActions.closeDrawer());
        }}>
        <Text
          style={{
            fontSize: responsiveFontSize(2.1),
            //   color: Colors.fundsDarkGrayColor,
            fontWeight: 'bold',
          }}>
          Home
        </Text>
      </TouchableOpacity> */}
      {/* <View>
        <View
          style={{
            width: '100%',
            height: 100,
          }}> */}
      {/* <ImageBackground
            source={require('./assets/images/patentInfo(2).png')}
            resizeMode="cover"
            style={{width: '100%', height: 100}}></ImageBackground> */}
      {/* </View>
      </View> */}
      {/* <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#DEDEDE',
          marginTop: 7,
          marginRight: 20,
        }}
      /> */}
      {/* <TouchableOpacity
        style={{
          marginVertical: 10,
          justifyContent: 'center',
          marginLeft: 15,
        }}
        onPress={() => {
          props.navigation.navigate('FaqInformation');
          props.navigation.dispatch(DrawerActions.closeDrawer());
        }}>
        <Text
          style={{
            // fontSize: responsiveFontSize(2.1),
            //   color: Colors.fundsDarkGrayColor,
            fontWeight: 'bold',
          }}>
          FAQs
        </Text>
      </TouchableOpacity> */}
      {/* <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#DEDEDE',
          marginTop: 7,
          marginRight: 20,
        }}
      /> */}
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginLeft: 15,
        }}
        onPress={() => {
          logout();
          // props.navigation.navigate('login');
          //props.navigation.dispatch(DrawerActions.closeDrawer());
        }}>
        <View style={{marginVertical: 10}}>
          <Text
            style={{
              //     fontSize: responsiveFontSize(2.1),
              //     color: Colors.fundsDarkGrayColor,
              fontWeight: 'bold',
            }}>
            Sign Out
          </Text>
        </View>
      </TouchableOpacity>
      {/* <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#DEDEDE',
          marginTop: 7,
          marginRight: 20,
        }}
      /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileView: {
    alignItems: 'center',
    padding: 10,
  },
  profilePhoto: {
    width: 180,
    height: 80,
    // borderRadius: 40,
  },
  profileUserName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  profileEmail: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
