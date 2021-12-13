import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerIcon: {
    marginHorizontal: Dimensions.get("window").width / 4,
    maxWidth: 150,
    height: 38,
    resizeMode: "contain",
  },
});
