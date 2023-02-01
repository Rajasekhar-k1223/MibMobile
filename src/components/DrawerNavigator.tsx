import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import DrawerMenu from './DrawerMenu';
import Userpage from './Userpage';

const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerPosition: 'right'}}
      drawerStyle={{
        width: 300,
        height: 550,
        backgroundColor: '#F1F1F1',
        borderRadius: 5,
        opacity: 0.9,
      }}
      drawerContent={DrawerMenu}>
      <Drawer.Screen name="userpage" component={Userpage} />
    </Drawer.Navigator>
  );
};
