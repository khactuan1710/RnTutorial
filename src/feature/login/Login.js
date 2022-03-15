import React from "react-native"
import { useState } from 'react';
import { View, Text , TouchableOpacity, TextInput} from "react-native"
import styles from "./LoginStyle"
const Login =({navigation}) => {
    
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

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
            />
       </View>
       <View style={{flex: 1}}>
       <TouchableOpacity style={[styles.btnLogin]} onPress={() => {
            navigation.navigate('Home', {username: username, password: password})
        }}>
            <Text>Go to Home Screen</Text>
        </TouchableOpacity>
       </View>

    </View>)
}

export default Login;