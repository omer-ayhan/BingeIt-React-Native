import React, { memo } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./ModalCardStyle";
import Modal from "react-native-modal";

const genres = [
  "ALL GENRES",
  "ACTION",
  "COMEDY",
  "DRAMA",
  "FANTASY",
  "HORROR",
  "ROMANCE",
  "THRILLER",
];

const ModalCard = ({ visible, onClose, onSelect }) => {
  const handleSelect = (title) => {
    onSelect(title);
    onClose();
  };

  const Category = ({ title }) => (
    <TouchableOpacity
      style={styles.genreButton}
      onPress={() => handleSelect(title)}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

  const extractId = (item, i) => `${item}||${i}`;

  const renderCategories = ({ item, index }) => (
    <Category title={item} key={index} />
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
          data={genres}
          renderItem={renderCategories}
          keyExtractor={extractId}
        />
      </View>
    </Modal>
  );
};

export default memo(ModalCard);
