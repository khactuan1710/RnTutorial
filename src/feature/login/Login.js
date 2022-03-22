import React from "react-native"
import { useState, useEffect } from 'react';
import { View, Text , TouchableOpacity, TextInput} from "react-native"
import styles from "./LoginStyle"
const Login =({navigation}) => {
    const [account, setAccount] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [loginFailed, setLoginFailed] = useState()

    useEffect(() => {
        fetch("https://60f4d20e2208920017f39df5.mockapi.io/account")
        .then((response) => {
            return response.json()
        }).then((json) => {
            setAccount(json)
        })
    }, [])

    const logIn = () => {
        let isSuccess = false;
        navigation.navigate('Home', {username: username, password: password})
        // account.forEach((item) => {
        //     if(item.username === username && item.password === password) {
        //         navigation.navigate('Home', {username: username, password: password})
        //         isSuccess = true;
        //     }
        // })
        // if(!isSuccess) {
        //     setLoginFailed("Thông tin tài khoản không đúng!")
        // }else {
        //     setLoginFailed("")
        // }
    }

    return(<View style={styles.container}>
        <View style={{flex: 1, justifyContent: "center"}}>
            <Text style={styles.txtDangNhap}>Đăng Nhập</Text>
        </View>

       <View style={{flex: 1, width: "100%"}}>
             <TextInput placeholder="username" style={styles.edLogin}
                onChangeText={(text) => {
                    setUsername(text)
                }}
             />
            <TextInput placeholder="password" style ={[styles.edLogin, {marginTop: 20}]}
             onChangeText={(text) => {
                setPassword(text)
              }}
              secureTextEntry={true}
            />
            <View style={{width: "80%", alignSelf: "center", marginTop: 10}}>
            <Text style={{color: "red"}}>{loginFailed}</Text>
            </View>
       </View>
       <View style={{flex: 1}}>
       <TouchableOpacity style={[styles.btnLogin]} onPress={() => {
            logIn();
        }}>
            <Text>Đăng nhập</Text>
        </TouchableOpacity>
       </View>

    </View>)
}

export default Login;