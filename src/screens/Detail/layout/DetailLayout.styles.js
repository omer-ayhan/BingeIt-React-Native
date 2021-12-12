import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../style/colors";

export default StyleSheet.create({
  bodyContainer: {
    flex: 2,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: colors.dark,
  },
  altTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  genreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  genre: {
    color: colors.gray,
    margin: 4,
    fontSize: 17,
  },
  rate: {
    margin: 0,
  },
  description: {
    textAlign: "left",
    fontSize: 17,
    color: colors.dark,
    marginVertical: 10,
  },
  tagContainer: {
    marginVertical: 6,
    flexDirection: "row",
    alignSelf: "flex-start",
    flexWrap: "wrap",
  },
  tagTitle: {
    color: colors.dark,
    fontSize: 17,
    fontWeight: "bold",
  },
  cast: {
    flexDirection: "row",
    alignItems: "center",
    // flexWrap: "wrap",
  },
});
