/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect, useRef } from 'react';
import {
  View, TextInput, TouchableOpacity, Text, FlatList, Keyboard,
} from 'react-native';
import { AutoScrollFlatList } from 'react-native-autoscroll-flatlist';

const { io } = require('socket.io-client');

function ChatDetail({ route, navigation }) {
  const socket = io('http://localhost:3000');
  const listRef = useRef();
  const { account, friend } = route.params;
  const room = parseInt(account.id) < parseInt(friend.id) ? `${account.id}-${friend.id}` : `${friend.id}-${account.id}`;
  const [listMessage, setListMessage] = useState();
  const [message, setMessage] = useState();
  const [keyboardStatus, setKeyboardStatus] = useState();
  const getMessage = async () => {
    console.log('call get message');
    await fetch(`https://60f4d20e2208920017f39df5.mockapi.io/message?idRoom=${room}`)
      .then((response) => response.json())
      .then((json) => {
        setListMessage(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(async () => {
    console.log('call user efff');
    socket.on('sendMessageServer', async (data) => {
      // await fetch('https://60f4d20e2208920017f39df5.mockapi.io/message', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
      await getMessage();
    });
  }, []);
  useEffect(async () => {
    await getMessage();
  }, []);

  const sendMessage = async () => {
    // const data = {
    //   idUser: account.username,
    //   message,
    //   idRoom: room,
    //   id: new Date(),
    // };
    await fetch('https://60f4d20e2208920017f39df5.mockapi.io/message', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idUser: account.username,
        message,
        idRoom: room,
        id: new Date(),
      }),
    });
    const data = {
      idUser: account.username,
      message,
      idRoom: room,
      id: new Date(),
    };

    socket.emit('sendMessage', data);
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const renderMessage = (item) => {
    console.log(account.id, 'account.id');
    console.log(item.idUser, 'item.id');
    return (
      account.username == item.idUser ? (
        <View style={{ marginVertical: 5, justifyContent: 'center', alignItems: 'flex-end' }}>
          <Text style={{
            fontSize: 20,
            marginLeft: 10,
            height: 40,
            backgroundColor: '#45aeff',
            padding: 8,
            borderRadius: 10,
            overflow: 'hidden',
          }}
          >
            {item.message}

          </Text>
        </View>
      ) : (
        <View style={{ marginVertical: 5, justifyContent: 'center', alignItems: 'flex-start' }}>
          <Text style={{
            fontSize: 20,
            marginLeft: 10,
            height: 40,
            backgroundColor: '#ffffff',
            padding: 8,
            borderRadius: 10,
            overflow: 'hidden',
          }}
          >
            {item.message}

          </Text>
        </View>
      )
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 90, borderWidth: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, marginLeft: 10 }}>{friend.name}</Text>
      </View>
      <View style={{ flex: keyboardStatus ? 1.5 : 10, borderWidth: 1 }}>
        <AutoScrollFlatList
          data={listMessage}
          renderItem={({ item }) => renderMessage(item)}
        />

      </View>
      <View style={{
        flex: 1.5, borderWidth: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 10,
      }}
      >
        <TextInput
          onChangeText={(text) => {
            setMessage(text);
          }}
          placeholder="input message"
          style={{
            width: '70%', borderWidth: 1, paddingLeft: 10, backgroundColor: '#d4d2cb', borderRadius: 30, height: 50,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            sendMessage();
          }}
          style={{
            alignItems: 'center', justifyContent: 'center', height: 40, marginLeft: 15, backgroundColor: 'blue', width: 70, borderRadius: 20,
          }}
        >
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default ChatDetail;
