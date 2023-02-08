/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './src/components/Login';
import Userpage from './src/components/Userpage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {DrawerNavigator} from './src/components/DrawerNavigator';
import FriendsList from './src/components/FriendsList';
import ChatView from './src/components/ChatView';
import ChatInput from './src/components/messages/ChatInput';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const MenuIcon = (props: any) => {
  let navigation = useNavigation();
  var iconsColor = props.tintColor;
  console.log(iconsColor);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}>
      {/* <Ionicons
        name="menu"
        size={28}
        color={Colors.headerTextColor}
        style={{color: iconsColor}}
        onPress={() => {
          console.log('ABC');
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      /> */}

      {/* <Ionicons
        name="home"
        size={28}
        color={Colors.headerTextColor}
        style={{color: iconsColor}}
        onPress={() => {
          console.log('ABC');
          navigation.navigate('Home');
          //  navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      /> */}
      {/* <Ionicons
        name="search"
        size={28}
        color={Colors.headerTextColor}
        style={{color: iconsColor}}
        onPress={() => {
          console.log('ABC');
          //  navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      /> */}
      <Ionicons
        name="chatbubbles-sharp"
        size={28}
        color={Colors.headerTextColor}
        style={{color: iconsColor, marginRight: 15}}
        onPress={() => {
          console.log('ABC');
          navigation.navigate('friendsList');
          //  navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      />
      <Ionicons
        name="md-notifications-circle-outline"
        size={28}
        color={Colors.headerTextColor}
        style={{color: iconsColor, marginRight: 15}}
        onPress={() => {
          console.log('ABC');
          navigation.navigate('Settings');
        }}
      />
      {/* <Ionicons
        name="menu"
        size={28}
        color={Colors.headerTextColor}
        style={{color: iconsColor}}
        onPress={() => {
          console.log('ABC');
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      /> */}
      <Ionicons
        name="apps"
        size={28}
        color={Colors.headerTextColor}
        style={{color: iconsColor}}
        onPress={() => {
          //console.log('ABC');
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      />
      {/* <Ionicons
        name="md-settings"
        size={28}
        color={Colors.headerTextColor}
        style={{color: iconsColor}}
        onPress={() => {
          console.log('ABC');
          navigation.navigate('Settings');
        }}
      /> */}
    </View>
  );
};
const LogoTitle = (props: any) => {
  return (
    <View>
      {/* <Image source={require('./assets/logo.png')} /> */}
      <Text style={{fontSize: 20, color: '#fff'}}>MIBook</Text>
    </View>
  );
};
const UserIcon = (props: any) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={require('./src/assets/imgs/blog.png')}
        style={{width: 45, height: 45, marginLeft: 25}}
      />
      {/* <Entypo
        name="dots-three-vertical"
        size={26}
        onPress={() => {
          alert('hello');
        }}
        style={{marginTop: 10, marginLeft: 10}}
      /> */}
      {/* <Text style={{fontSize: 20, color: '#fff'}}>MIBook</Text> */}
    </View>
  );
};
const UserMenuIcon = (props: any) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {/* <Image
        source={require('./src/assets/imgs/blog.png')}
        style={{width: 45, height: 45}}
      /> */}
      <Ionicons name="call" size={30} style={{marginRight: 25}} />
      <Ionicons name="md-videocam" size={30} style={{marginRight: 0}} />
      <Entypo
        name="dots-three-vertical"
        size={26}
        onPress={() => {
          alert('hello');
        }}
        style={{marginTop: 10, marginLeft: 10}}
      />
      {/* <Text style={{fontSize: 20, color: '#fff'}}>MIBook</Text> */}
    </View>
  );
};

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="LanguageSelect"
          component={LanguageSelect}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="userpage"
          component={DrawerNavigator}
          options={({route}) => ({
            title: 'Feeds',
            //backgroundColor: 'red',
            //headerLeft: props => <LogoTitle {...props} />,
            // headerLeft: props => <LogoTitle {...props} />,
            // headerLeft: props => null,
            headerRight: props => <MenuIcon {...props} />,
            headerLeft: props => <LogoTitle {...props} />,
            //headerLeft: null,
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              marginTop: 20,
              fontSize: 20,
            },
            gestureEnabled: false,
            headerStyle: {
              backgroundColor: '#3c2d52',
            },
          })}
        />
        <Stack.Screen
          name="friendsList"
          component={FriendsList}
          //options={{headerShown: false}}
        />
        <Stack.Screen
          name="chatview"
          component={ChatView}
          options={({route}) => ({
            title: route.params.userName,
            // backgroundColor: 'red',
            //headerLeft: props => <LogoTitle {...props} />,
            // headerLeft: props => <LogoTitle {...props} />,
            headerLeft: props => null,
            headerRight: props => <UserMenuIcon {...props} />,
            // headerLeft: props => <UserIcon {...props} />,
            headerTitleAlign: 'left',
            headerTitleMarginLeft: 0,
            headerTintColor: route.params.iconsColor,
            headerTitleStyle: {
              // marginLeft: 20,
              // fontSize: responsiveFontSize(1.95),
              color: '#000',
            },
            gestureEnabled: false,
            headerStyle: {
              //backgroundColor: route.params.backgroundColor,
              backgroundColor: 'yellow',
            },
          })}
          //options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
