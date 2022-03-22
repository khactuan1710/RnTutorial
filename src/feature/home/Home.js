import React from "react-native"
import { useEffect, useState } from "react"
import { View, Text, FlatList, Image } from "react-native"
import HomeController from "./HomeController"
import Header from "../../common/base/Header"
const Home = ({ route }) => {
    const { getInfoCustomer, getInfo } = HomeController()
    const account = route.params
    const [res, setRes] = useState()
    const [customerInfo, setCustomerInfo] = useState();

    // useEffect ( async() => {
    //     const respo = await getInfoCustomer()
    //     setRes(respo)
    // },[])

    useEffect(async () => {
        const res = await getInfo();
        setCustomerInfo(res)
    }, [])

    return (<View style={{ justifyContent: "center", flex: 1 }}>
        <Header title="Home" />
        <FlatList
            data={customerInfo}
            renderItem={({ item }) => {
                return (
                    <View style={{ width: "100%", marginTop: 50, marginLeft: 20 }}>
                        <Text>name: {item.name}</Text>
                        <Text>age: {item.age}</Text>
                        <Text>address: {item.address}</Text>
                        <Image style={{ height: 100, width: 100 }} resizeMode="contain" source={{ uri: item.avatar }} />
                    </View>
                )
            }}
            ListEmptyComponent={() => {
                return (<View style={{ alignSelf: "center" }}>
                    <Text>Không có dữ liệu</Text>
                </View>)
            }}
        />
    </View>)
}

export default Home;