import React from "react-native"
import {useEffect, useState} from "react"
import { View, Text } from "react-native"
import HomeController from "./HomeController"
const Home =({route}) => {
    const {getInfoCustomer} = HomeController()
    const account = route.params
    const [res, setRes] = useState()
    useEffect ( async() => {
        console.log("test1");
        // setRes(await getInfoCustomer())
        const respo = await getInfoCustomer()
        setRes(respo)
        console.log(respo.description, "rp");
        console.log(res.description);
    },[])
    return(<View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
        <Text>Home</Text>
        <Text>username: {account.username}</Text>
        <Text>password: {account.password}</Text>
        <Text>{res.description + ""}</Text>
    </View>)
}

export default Home;