import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../../style/colors";
import styles from "./StatusIndicator.styles";

export default function StatusIndicator({
  text,
  icon,
  iconSize = 20,
  iconColor = colors.dark,
  containerStyle,
  textStyle,
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      {!!icon && <Icon name={icon} size={iconSize} color={iconColor} />}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
}
