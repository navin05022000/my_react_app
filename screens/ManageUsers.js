import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground,Modal, View, Button, Text } from 'react-native';
import * as RootNavigation from '../ProjectFiles/RootNavigation';
//import { TouchableOpacity } from 'react-native-web';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  UserInfo,
  UserImgWrapper,
  UserImg,
  //UserInfoText,
  UserName,
  //MessageText,
  TextSection
} from '../ProjectFiles/styles/UsersStyle';

import { database } from '../ProjectFiles/config';

export default function ManageUsers({ navigation }) {
  const [Messages, setData] = useState([]); // intial value is empty array
  const [modalVisible, setModalVisible] = useState(false);
  const [edit, setEdit] = useState(false);
   
  useEffect(() => {
    database.ref('users').once('value').then((item) => {
      let users = [];
      console.log(item.val());
      item.forEach((childSnapshot) => {
        users.push(childSnapshot.val())
      })
      console.log(users);
      setData(users); // updating state
    })
  }, []); // effect will run only once

  const storyItem = ({ item }) => {
    return (
      <ImageBackground
      style={{ flex: 1 }}
      source={require('../assets/water.png')}>
      <UserInfo>
        <UserImgWrapper>
          <UserImg source={{ uri: item.image }} />
        </UserImgWrapper>
        <TextSection>
            <UserName>{item.userName}</UserName>
        </TextSection>
        <Icon.Button name="edit" backgroundColor="../assets/water.png" onPress={() =>setEdit(true)} size={30}></Icon.Button>
        <Modal 
        animationType="fade"
        visible={edit}>
          <View>
            <Text>{'are u really want to edit this user'}</Text>
          </View>
          <Button
                    onPress={() => setEdit(false)} title="YES" >
          </Button>
        </Modal>
        <Icon.Button name="delete" backgroundColor="../assets/water.png" onPress={() => setModalVisible(true)} size={30}></Icon.Button>
        <Modal 
        animationType="fade"
        visible={modalVisible}>
          <View>
            <Text>{'are u really want to delete this user'}</Text>
          </View>
          <Button
                    onPress={() => setModalVisible(false)} title="YES" >
          </Button>
        </Modal>
      </UserInfo>
      </ImageBackground>
    )
  }
  return (
    <Container>
      <FlatList
        data={Messages}
        keyExtractor={item => item.id}
        renderItem={storyItem}></FlatList>
    </Container>
  );
};


