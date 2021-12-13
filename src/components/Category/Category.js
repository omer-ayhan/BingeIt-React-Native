import React, { useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./Category.styles";

const Category = ({ title, onSelect, onClose, genre }) => {
  const handleSelect = (title) => {
    onSelect(title);
    onClose();
  };

  return useMemo(
    () => (
      <TouchableOpacity
        style={styles.genreButton}
        onPress={() => handleSelect(title)}>
        <Text style={[styles.title, title === genre && styles.selected]}>
          {title}
        </Text>
      </TouchableOpacity>
    ),
    [title, genre, handleSelect]
  );
};

export default Category;
