/*import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Profile from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';



const Drawer = createDrawerNavigator();

const Start = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="person-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Messages"
                component={MessagesScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Moments"
                component={MomentsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="timer-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="settings-outline" size={22} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default Start;


 <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      /> 
*/

import * as React from 'react';
import { View, Text, Button } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../screens/Welcome';
import ManageUsers from '../screens/ManageUsers';
import ManageDocuments from '../screens/ManageDocuments';
import GroupChat from '../screens/GroupChat';
import CustomDrawer from '../components/CustomDrawer';
import {createDrawerNavigator} from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawer {...props} />} >
      <Drawer.Screen name="Welcome" component={Welcome} />
      <Drawer.Screen name="ManageUsers" component={ManageUsers} />
      <Drawer.Screen name="ManageDocuments" component={ManageDocuments} />
      <Drawer.Screen name="GroupChat" component={GroupChat} />
    </Drawer.Navigator>
  );
}

export default function Dashboard() {
  return (
    
      <MyDrawer />
    
  );
}