import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
  let user = JSON.parse(localStorage.getItem("Login_User"));

  const SignOut = () => {
    localStorage.removeItem("Login_User");
    alert('You Successfull SignOUT');
    navigation.navigate('Login')
  }
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
          source={require('../assets/cool.jpg')}
          style={{padding: 20}}>
          <Image
            source={{ uri:user.image }}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 28,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            Welcome
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Roboto-Regular',
                fontSize: 28,
                marginRight: 5,
              }}>
              {user.userName}
            </Text>
            <FontAwesome5 name="man" size={20} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity 
        
        onPress={() => SignOut()} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
