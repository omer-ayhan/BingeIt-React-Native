import { Dimensions, StyleSheet } from "react-native";

import colors from "../../style/colors";

const deviceSize = Dimensions.get("window");

export default {
  default: StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.main,
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    text: {
      color: colors.white,
      fontSize: 20,
      fontWeight: "bold",
    },
  }),
  secondary: StyleSheet.create({
    container: {
      backgroundColor: colors.secondary,
    },
    text: {
      color: colors.white,
    },
  }),
  warning: StyleSheet.create({
    container: {
      backgroundColor: colors.warning,
    },
    text: {
      color: colors.white,
    },
  }),
  danger: StyleSheet.create({
    container: {
      backgroundColor: colors.danger,
    },
    text: {
      color: colors.white,
    },
  }),
  success: StyleSheet.create({
    container: {
      backgroundColor: colors.success,
    },
    text: {
      color: colors.white,
    },
  }),
  info: StyleSheet.create({
    container: {
      backgroundColor: colors.info,
    },
    text: {
      color: colors.white,
    },
  }),
  dark: StyleSheet.create({
    container: {
      backgroundColor: colors.dark,
    },
    text: {
      color: colors.white,
    },
  }),
  outline: StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderColor: colors.main,
      borderWidth: 1,
    },
    text: {
      color: colors.main,
    },
  }),
};
