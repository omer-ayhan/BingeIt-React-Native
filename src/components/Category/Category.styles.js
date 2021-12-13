import { StyleSheet } from "react-native";

import colors from "../../style/colors";

export default StyleSheet.create({
  genreButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    marginHorizontal: 20,
    borderBottomWidth: 0.5,
    borderColor: colors.gray,
  },
  title: {
    color: colors.dark,
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 1,
  },
  selected: {
    color: colors.main,
  },
});
