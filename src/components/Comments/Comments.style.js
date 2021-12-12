import { Dimensions, StyleSheet } from "react-native";

import colors from "../../style/colors";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  commentTitle: {
    width: deviceSize.width - 40,
    textAlign: "left",
    color: colors.dark,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  comment: {
    color: colors.dark,
  },
});
