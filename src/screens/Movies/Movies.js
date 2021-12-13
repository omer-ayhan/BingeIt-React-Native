import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./Movies.styles";
import MovieCard from "../../components/MovieCard";
import FloatingButton from "../../components/FilterButton";
import ModalCard from "../../components/ModalCard";
import routes from "../../navigation/routes";
import StatusIndicator from "../../components/StatusIndicator";
import colors from "../../style/colors";
import useFetchEffect from "../../hooks/useFetchEffect";

const Movies = () => {
  const navigation = useNavigation();
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [genre, setGenre] = useState("ALL GENRES");

  const url = `http://192.168.1.124:3000/movies`;
  const { data: movieData, loading, error } = useFetchEffect(url);

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
        text={`Error: ${error.message}`}
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
      text="No Movies Found"
      icon="delete-empty"
      iconColor={colors.info}
      iconSize={60}
    />
  );

  const mainMovieData = !!filteredMovies.length ? filteredMovies : movieData; // if filteredMovies is not empty, use it, else use movieData

  const handleGenreFilter = (title) => {
    setGenre(title);
    const filtered = movieData.filter((movie) => movie.genre.includes(title));
    setFilteredMovies(filtered);
  };

  return (
    <View style={styles.container}>
      <FlatList
        removeClippedSubviews
        renderItem={renderMovieCard}
        data={mainMovieData}
        keyExtractor={extractId}
        ListEmptyComponent={renderEmpty}
      />
      <ModalCard
        genre={genre}
        visible={modalVisible}
        onClose={handleModalVisible}
        onSelect={handleGenreFilter}
      />
      <FloatingButton iconName="plus" onPress={handleModalVisible} />
    </View>
  );
};

export default Movies;
