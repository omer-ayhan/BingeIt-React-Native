import { StyleSheet, Dimensions } from "react-native";
import colors from "../../style/colors";
const deviceSize = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: deviceSize.height / 3,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  title: {
    color: colors.dark,
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 1,
  },
});
