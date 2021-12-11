import React from "react";
import { View, Text } from "react-native";

import styles from "./Tag.style";

export default function Tag({ iconName, label }) {
  return (
    <View style={styles.container}>
      {iconName && <Icon name={iconName} size={22} color="#fff" />}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}
