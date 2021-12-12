import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./Button.styles";

export default function Button({ onPress, title, variant = "default" }) {
  return (
    <TouchableOpacity
      style={[
        styles.default.container,
        variant !== "default" && styles[variant].container,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.default.text,
          variant !== "default" && styles[variant].text,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
