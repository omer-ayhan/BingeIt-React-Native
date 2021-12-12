import React from "react";
import { View, Text } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./Tag.style";

export default function Tag({
  iconName = null,
  label,
  containerStyle,
  textStyle,
  iconSize = 22,
  iconColor = "#fff",
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      {!!iconName && <Icon name={iconName} size={iconSize} color={iconColor} />}
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </View>
  );
}
