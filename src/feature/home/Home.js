import React from "react-native"
import { useEffect, useState } from "react"
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native"
import HomeController from "./HomeController"
import Header from "../../common/base/Header"
import { Dimensions } from 'react-native';
const Home = ({ route, navigation }) => {
    const { getInfoCustomer, getInfo, goToConversation } = HomeController()
    const account = route.params
    const [res, setRes] = useState()
    const [customerInfo, setCustomerInfo] = useState();
    const [isLike, setIsLike] = useState(false);

    // useEffect ( async() => {
    //     const respo = await getInfoCustomer()
    //     setRes(respo)
    // },[])

    useEffect(async () => {
        const res = await getInfo();
        setCustomerInfo(res)
    }, [])


    const windowWidth = Dimensions.get('window').width;

    const likeImage = () => {
        setIsLike(!isLike)
    }
    const hideImage = (item) => {

    }
    

    return (<View style={{ justifyContent: "center", flex: 1 }}>
        {/* <Header title="Home" /> */}
        <View style={{flexDirection:"row",  alignSelf: "flex-end"}}>
            <TouchableOpacity style={{width: 40, alignSelf: "flex-end", marginTop: 10, marginRight: 15}}
                onPress={() => {
                    // goUserInfo(navigation)
                }}
            >
                <Image style={{width: 40, height: 40}} resizeMode="contain"  source={require('../../asset/images/user.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 40, alignSelf: "flex-end", marginTop: 10, marginRight: 15}}
                onPress={() => {
                    goToConversation(navigation)
                }}
            >
                <Image style={{width: 40, height: 40}} resizeMode="contain"  source={require('../../asset/images/messenger.png')}/>
            </TouchableOpacity>
        </View>
        
        <FlatList
            data={customerInfo}
            renderItem={({ item }) => {
                return (
                    <View style={{ width: "95%", marginTop: 50, alignSelf: "center"}}>
                        <View style={{flexDirection: 'row', width: '100%'}}>
                            <Image source={{uri:item.avatar}} style={{width: 50, height: 50, borderRadius: 25, borderWidth: 2, borderColor: '#0ac6ff'}}/>
                            <View>
                                <View style={{marginLeft: 10}}>
                                    <Text style={{fontWeight: "bold", fontSize: 18}}>{item.name}</Text>
                                    <Text>{item.timePost}</Text>
                                </View>
                            </View>
                            <View style={{flex: 1}}/>
                            <TouchableOpacity
                                onPress={() => {
                                    const _listFriend = customerInfo;
                                    const _newList = _listFriend.filter((_item) => {
                                        if(_item.id != item.id) {
                                            return _item
                                        }
                                    })
                                    setCustomerInfo(_newList)
                                }}
                            >
                                <Image source={require('../../asset/images/cancel.png')} style={{width: 20, height: 20}}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text>{item.content}</Text>
                            <Image style={{ height: 300, width: windowWidth * 95 / 100 }} resizeMode="contain" source={{ uri: item.avatar }} />
                        </View>
                        <View style={{height: 40}}></View>
                        <View style={{width: windowWidth, height: 40, flexDirection: "row", justifyContent: "space-between", borderTopWidth: 1, borderBottomWidth: 1}}>
                            <TouchableOpacity 
                                onPress={() => {
                                    // likeImage()
                                    customerInfo.forEach((friend) => {
                                        if(friend.id === item.id) {
                                            item.isLike = !item.isLike
                                        }
                                    })
                                    setIsLike(!isLike)

                                }}
                                style={{flexDirection: 'row', alignItems: "center", flex: 1,  justifyContent: "center"}}>
                                <Image source={require('../../asset/images/like.png')}  style={{width: 25, height: 25, marginRight: 2, tintColor: item.isLike?'blue': 'black'}}/>
                                <Text style={{marginLeft: 2, color: item.isLike?'blue': 'black'}}>Like</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: "center", flex: 1,  justifyContent: "center"}}>
                                <Image source={require('../../asset/images/comment.png')} style={{width: 25, height: 25, marginRight: 2}}/>
                                <Text style={{marginLeft: 2}}>Comment</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: "center", flex: 1,  justifyContent: "center"}}>
                                <Image source={require('../../asset/images/share.png')} style={{width: 25, height: 25, marginRight: 2}}/>
                                <Text style={{marginLeft: 2}}>Share</Text>
                            </TouchableOpacity>
                        </View>
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