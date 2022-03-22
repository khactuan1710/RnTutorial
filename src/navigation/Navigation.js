import React from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../feature/login/Login";
import Home from "../feature/home/Home";
const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return(<NavigationContainer>
        <Stack.Navigator
        //  screenOptions={{headerShown: false}}
         >
            <Stack.Screen component={Login} name = "Login"/>
            <Stack.Screen component={Home} name = "Home"/>
        </Stack.Navigator>
    </NavigationContainer>)
}

export default Navigation
