import { StyleSheet } from "react-native";

import colors from "../../style/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 3,
  },
  label: {
    fontSize: 17,
    color: "#fff",
    marginHorizontal: 2,
  },
});

export default styles;
