import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./MoviesStyle";
import MovieCard from "../../components/MovieCard";
import FloatingButton from "../../components/FilterButton";
import ModalCard from "../../components/ModalCard";
import routes from "../../navigation/routes";
import StatusIndicator from "../../components/StatusIndicator";
import colors from "../../style/colors";
import useFetchEffect from "../../hooks/useFetchEffect";

const Movies = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [genre, setGenre] = useState("");
  const url = `http://192.168.1.124:3000/movies?genre_like=${genre}`;
  const { data: movieData, loading, error } = useFetchEffect(url, [genre]);

  const handleCardSelect = (item) => {
    navigation.navigate(routes.DETAIL, { item });
  };
  function handleModalVisible() {
    setModalVisible(!modalVisible);
  }

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
        text="An error has occurred"
        icon="alert-circle"
        iconColor={colors.danger}
        iconSize={60}
      />
    );
  }

  const extractId = (_, i) => `${i}_*_${i}`;

  const renderMovieCard = ({ item }) => (
    <MovieCard data={item} onSelect={() => handleCardSelect(item)} />
  );

  const renderEmpty = () => (
    <StatusIndicator
      text="No Movies"
      icon="delete-empty"
      iconColor={colors.info}
      iconSize={60}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderMovieCard}
        data={movieData}
        keyExtractor={extractId}
        ListEmptyComponent={renderEmpty}
      />
      <ModalCard
        visible={modalVisible}
        onClose={handleModalVisible}
        onSelect={setGenre}
      />
      <FloatingButton iconName="plus" onPress={handleModalVisible} />
    </View>
  );
};

export default Movies;
