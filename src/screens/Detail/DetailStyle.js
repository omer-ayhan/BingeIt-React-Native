import { StyleSheet } from "react-native";

import colors from "../../style/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingVertical: 18,
    paddingHorizontal: 24,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10,
  },
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
  inputContainer: {
    borderWidth: 0.5,
    width: "95%",
    padding: 5,
    flexDirection: "row",
  },
  reviewContainer: {
    display: "none",
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 10,
    paddingLeft: 5,
  },
});
