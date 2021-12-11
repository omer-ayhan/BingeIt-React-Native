import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window")
export default StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 5,
        right: deviceSize.width / 3,
        borderRadius: 10,
        width: deviceSize.width / 3,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(251, 140, 0, 1)",
        flexDirection: "row"
    },
    title: {
        fontSize: 28,
        color: "white",
        marginRight: 10
    }

})