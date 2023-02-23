import React, {useEffect} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import loginPageEmail from '../assets/imgs/64666.jpg';
import loginPageSocaial from '../assets/imgs/5551.jpg';
import loginMailIcon from '../assets/imgs/email.png';
import loginMailHome from '../assets/imgs/home.png';
import loginMailBlog from '../assets/imgs/blog.png';
import {
  Stack,
  TextInput,
  IconButton,
  Button,
} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  NavigationContainer,
  useNavigation,
  useIsFocused,
} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login() {
  const navigation = useNavigation();
  useEffect(() => {
    StatusBar.setBackgroundColor('#EAECEE');
    StatusBar.setTranslucent(true);
  }, []);
  const CheckUser = () => {
    console.log('login');
    AsyncStorage.setItem('userId', '25');
    navigation.navigate('userpage');
  };
  return (
    <KeyboardAvoidingView>
      <SafeAreaView style={{backgroundColor: '#fff', height: '100%'}}>
        <ScrollView>
          <View
            style={{
              // paddingTop: '5%',
              height: '100%',
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 1,
              padding: 5,
              backgroundColor: '#fff',
            }}>
            {/* <View style={{padding: '2%'}}>
          <Text
            style={{fontSize: 30, fontFamily: 'HelveticaNeue-MediumItalic'}}>
            Mibook
          </Text>
        </View> */}
            <View style={{alignItems: 'flex-start', flexDirection: 'column'}}>
              <Text
                style={{
                  position: 'absolute',
                  fontSize: 25,
                  padding: 5,
                  paddingLeft: 1,
                  zIndex: 10,
                  color: 'black',
                  fontWeight: '900',
                }}>
                Mibook
              </Text>
              <Image
                source={loginPageSocaial}
                style={{
                  position: 'relative',
                  zIndex: 9,
                  bottom: 0,
                  width: '100%',
                  height: 230,
                  marginTop: 20,
                }}
              />
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Icon name="person-circle" size={60} />
            </View>
            <Stack spacing={10} style={{margin: 16}}>
              <TextInput
                label="User name or email"
                variant="outlined"
                trailing={() => (
                  <IconButton
                    icon={() => (
                      <Icon name="ios-person" size={20} color="#000" />
                    )}
                  />
                )}
              />
              <TextInput
                label="password"
                variant="outlined"
                trailing={() => (
                  <IconButton
                    icon={() => <Icon name="eye" size={20} color="#000" />}
                  />
                )}
              />
              <View
                style={{
                  alignItems: 'flex-end',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{fontSize: 14, fontWeight: '600'}}
                  onPress={() => {
                    alert('password');
                  }}>
                  Forgot Password
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: '600'}}
                  onPress={() => {
                    alert('Signup');
                  }}>
                  Signup
                </Text>
              </View>
              <View style={{alignItems: 'center', flexDirection: 'column'}}>
                <TouchableOpacity
                  onPress={() => {
                    CheckUser();
                  }}
                  style={{
                    backgroundColor: 'blue',
                    width: '80%',
                    padding: 10,
                    borderRadius: 5,
                    alignItems: 'center',
                  }}>
                  {/* <Button title="Login" style={{padding: 5}}> */}
                  <Text
                    style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
                    Login
                  </Text>
                  {/* </Button> */}
                </TouchableOpacity>
              </View>
            </Stack>
          </View>
        </ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            height: '10%',
            marginTop: 5,
            position: 'absolute',
            bottom: 0,
            alignItems: 'center',
            paddingLeft: 30,
            paddingRight: 30,
          }}>
          <Image source={loginMailIcon} style={{width: 45, height: 45}} />
          <Image source={loginMailHome} style={{width: 45, height: 45}} />
          <Image source={loginMailBlog} style={{width: 45, height: 45}} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default Login;
