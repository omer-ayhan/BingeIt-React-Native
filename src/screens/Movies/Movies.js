import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./MoviesStyle";
import axios from "axios";
import MovieCard from "../../components/MovieCard";
import FloatingButton from "../../components/FilterButton";
import ModalCard from "../../components/ModalCard";
const Movies = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(true);
  const [genre, setGenre] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `http://192.168.1.124:3000/movies?genre_like=${genre}`
      );
      setMovieData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [genre]);

  const handleCardSelect = (item) => {
    navigation.navigate("Detail", { item });
  };
  function handleModalVisible() {
    setModalVisible(!modalVisible);
  }

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({ item }) => (
          <MovieCard data={item} onSelect={() => handleCardSelect(item)} />
        )}
        data={movieData}
        keyExtractor={(item) => item.id}
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
