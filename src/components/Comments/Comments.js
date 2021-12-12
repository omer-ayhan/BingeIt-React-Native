import React from "react";
import { Text, View } from "react-native";

import styles from "./Comments.style";

const Comments = ({ item, index }) => (
  <View>
    <Text style={styles.commentTitle}>Comment #{index + 1}:</Text>
    <Text style={styles.comment}>{item.comment}</Text>
  </View>
);

export default Comments;
