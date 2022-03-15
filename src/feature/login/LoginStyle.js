import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {alignItems: "center", flex: 1},
    txtDangNhap: {fontSize: 20, alignSelf:"center"},
    btnLogin: {width: 150, height: 30, alignSelf: "center",
     backgroundColor: "blue", borderRadius: 10, alignItems: "center",
      justifyContent: "center"},
    edLogin: {paddingLeft: 10,  height: 50, width: "80%",
     borderRadius: 10, borderWidth: 1, alignSelf: "center"}
})

export default styles;