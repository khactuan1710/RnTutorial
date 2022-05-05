import React from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../feature/login/Login";
import Home from "../feature/home/Home";
import Conversation from "../feature/coversation/Conversation";
import ChatDetail from "../feature/chatDetail/ChatDetail";
const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return(<NavigationContainer>
        <Stack.Navigator
        //  screenOptions={{headerShown: false}}
         >
            <Stack.Screen component={Login} name = "Login"/>
            <Stack.Screen component={Home} name = "Home"/>
            <Stack.Screen component={Conversation} name = "Conversation"/>
            <Stack.Screen component={ChatDetail} name = "ChatDetail"/>
        </Stack.Navigator>
    </NavigationContainer>)
}

export default Navigation
