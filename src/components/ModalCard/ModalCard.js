import React from "react";
import { View, FlatList } from "react-native";
import Modal from "react-native-modal";
import useFetchEffect from "../../hooks/useFetchEffect";
import colors from "../../style/colors";
import Category from "../Category";
import StatusIndicator from "../StatusIndicator";

import styles from "./ModalCardStyle";

const ModalCard = ({ visible, onClose, onSelect, genre }) => {
  const urlGenres = "http://192.168.1.124:3000/genres";

  const { data: allGenres, loading, error } = useFetchEffect(urlGenres);

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

  const extractId = (item, i) => `${item}||${i}`;

  const renderCategories = ({ item }) => (
    <Category
      title={item.name}
      onSelect={onSelect}
      onClose={onClose}
      genre={genre}
    />
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
