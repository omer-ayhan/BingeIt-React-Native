import { StyleSheet } from "react-native";

import colors from "../../style/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    textAlign: "center",
    color: colors.dark,
    fontSize: 35,
    fontWeight: "bold",
  },
});

export default styles;
