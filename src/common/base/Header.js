import React from "react-native"
import {View, Text } from "react-native"

const Header = (props) => {
    const {title} = props
    console.log(title, "title");
    return(<View style={{height : 96, width: "100%", backgroundColor: "#00a6ff", alignItems: "center", justifyContent: "center"}}>
        <Text>{title}</Text>
    </View>)
}

export default Header