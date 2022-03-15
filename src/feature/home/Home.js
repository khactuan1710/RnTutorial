import React from "react-native"
import { View, Text } from "react-native"
const Home =({route}) => {
    const account = route.params
    return(<View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
        <Text>Home</Text>
        <Text>username: {account.username}</Text>
        <Text>password: {account.password}</Text>
    </View>)
}

export default Home;