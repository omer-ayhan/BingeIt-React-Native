import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window")
export default StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 10,
        right: deviceSize.width / 3,
        borderRadius: 10,
        width: deviceSize.width / 3,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffcccb",
    },
    title: {
        fontSize: 20,
        color: "black",

    }

})