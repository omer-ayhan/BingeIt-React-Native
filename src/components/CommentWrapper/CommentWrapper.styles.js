import { Dimensions, StyleSheet } from "react-native";
import colors from "../../style/colors";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  reviewContainer: {
    alignItems: "center",
  },
  reviewTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.dark,
  },
  reviewDesc: {
    fontSize: 17,
    color: colors.gray,
  },

  addReviewContainer: {
    width: deviceSize.width - 40,
    marginVertical: 15,
  },
  input: {
    padding: 20,
    paddingLeft: 5,
    borderRadius: 10,
    backgroundColor: colors.lighterGray,
    fontSize: 15,
  },
  emptyTitle: {
    fontSize: 25,
  },
});
