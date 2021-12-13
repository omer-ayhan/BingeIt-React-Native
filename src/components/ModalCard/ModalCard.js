import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Modal from "react-native-modal";
import useFetchEffect from "../../hooks/useFetchEffect";
import colors from "../../style/colors";
import StatusIndicator from "../StatusIndicator";

import styles from "./ModalCardStyle";

const ModalCard = ({ visible, onClose, onSelect, genre }) => {
  const urlGenres = "http://192.168.1.124:3000/genres";

  const { data: allGenres, loading, error } = useFetchEffect(urlGenres);

  console.log(allGenres);

  const handleSelect = (title) => {
    onSelect(title);
    onClose();
  };

  if (loading) {
    return (
      <StatusIndicator
        text="Loading..."
        icon="clock-time-eight"
        iconColor={colors.main}
        iconSize={60}
      />
    );
  }

  if (error) {
    return (
      <StatusIndicator
        text={`Error: ${error.message}`}
        icon="alert-circle"
        iconColor={colors.danger}
        iconSize={60}
      />
    );
  }

  const Category = ({ title }) =>
    useMemo(
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

  const extractId = (item, i) => `${item}||${i}`;

  const renderCategories = ({ item, index }) => (
    <Category title={item.name} key={index} />
  );

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection="down">
      <View style={styles.container}>
        <FlatList
          data={allGenres}
          renderItem={renderCategories}
          keyExtractor={extractId}
        />
      </View>
    </Modal>
  );
};

export default ModalCard;
