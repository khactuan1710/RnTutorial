/* eslint-disable react/jsx-filename-extension */
import React, {
  View, Text, TouchableOpacity, TextInput, Image,
} from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './LoginStyle';

function Login({ navigation }) {
  const [account, setAccount] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loginFailed, setLoginFailed] = useState();
  const [isShowPass, setIsShowPass] = useState(false);

  useEffect(() => {
    fetch('https://60f4d20e2208920017f39df5.mockapi.io/customer')
      .then((response) => response.json()).then((json) => {
        setAccount(json);
      });
  }, []);

  const logIn = () => {
    let isSuccess = false;
    account.forEach(async (item) => {
      console.log(item.username, 'username');
      if (item.username === username && item.password === password) {
        isSuccess = true;
        await storeUser(item);
        navigation.navigate('Home', { username, password });
      }
    });
    if (!isSuccess) {
      setLoginFailed('Thông tin tài khoản không đúng!');
    } else {
      setLoginFailed('');
    }
  };

  const storeUser = async (item) => {
    try {
      const jsonValue = JSON.stringify(item);
      await AsyncStorage.setItem('user', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.txtDangNhap}>Đăng Nhập</Text>
      </View>

      <View style={{ flex: 1, width: '100%' }}>
        <TextInput
          placeholder="username"
          style={styles.edLogin}
          onChangeText={(text) => {
            setUsername(text);
          }}
        />
        <View style={{
          height: 50, width: '80%', borderRadius: 10, paddingLeft: 10, borderWidth: 1, marginTop: 20, alignSelf: 'center', flexDirection: 'row',
        }}
        >
          <TextInput
            placeholder="password"
            style={[{ flex: 1 }]}
            onChangeText={(text) => {
              setPassword(text);
            }}
            secureTextEntry={!isShowPass}
          />
          <TouchableOpacity
            style={{ alignSelf: 'center', marginRight: 10 }}
            onPress={() => {
              setIsShowPass(!isShowPass);
            }}
          >
            {isShowPass ? <Image source={require('../../asset/images/eyeClose.png')} style={{ width: 20, height: 20 }} />
              : <Image source={require('../../asset/images/eyeOpen.png')} style={{ width: 20, height: 20 }} />}
          </TouchableOpacity>
        </View>
        <View style={{ width: '80%', alignSelf: 'center', marginTop: 10 }}>
          <Text style={{ color: 'red' }}>{loginFailed}</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={[styles.btnLogin]}
          onPress={() => {
            logIn();
          }}
        >
          <Text>Đăng nhập</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default Login;
