/* eslint-disable react/jsx-filename-extension */
import React, {
  View, Text, FlatList, Image, TouchableOpacity,
} from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeController from '../home/HomeController';

function Conversation({ navigation }) {
  const { getInfoCustomer, getInfo, goToConversation } = HomeController();
  const [listFriend, setListFriend] = useState();
  const [userInfo, setUserInfo] = useState();
  useEffect(async () => {
    const value = await getUser();
    const res = await getInfo();
    res.push(value);
    console.log(res);
    setListFriend(res);
  }, []);

  const getUser = async () => {
    let value;
    try {
      value = await AsyncStorage.getItem('user');
      if (value !== null) {
        setUserInfo(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
      // error reading value
    }
    return JSON.parse(value);
  };
  const goToChatDetail = (item) => {
    navigation.navigate('ChatDetail', { account: userInfo, friend: item });
  };

  const renderFriend = (item) => (
    <View>
      <TouchableOpacity
        style={{
          width: '100%', height: 70, flexDirection: 'row', marginTop: 20,
        }}
        onPress={() => {
          goToChatDetail(item);
        }}
      >
        <Image style={{ width: 70, height: 70, borderRadius: 100 }} source={{ uri: item.avatar }} />
        <View>
          <Text style={{ fontSize: 20, marginLeft: 5 }}>{item.name}</Text>
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 5, height: 5, backgroundColor: '#edebeb' }} />
    </View>
  );
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ paddingHorizontal: 10 }}
        keyExtractor={(item, index) => index}
        data={listFriend}
        renderItem={({ item }) => (
          renderFriend(item)
        )}
      />
    </View>
  );
}

export default Conversation;
