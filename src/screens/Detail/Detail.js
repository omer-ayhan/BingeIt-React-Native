import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TextInput, Button, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import MovieCard from "../../components/MovieCard";
import axios from "axios";
import uuid from "react-native-uuid";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./DetailStyle";
import Tag from "../../components/Tag";
const Detail = () => {
  const route = useRoute();

  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(true);
  const [commentsData, setCommentsData] = useState();
  const [loadingComments, setLoadingComments] = useState(true);
  const [comment, setComment] = useState("");

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(
        `http://192.168.1.124:3000/movies?genre_like=${route.params.item.genre.join(
          "&genre_like="
        )}`
      );
      // const { data } = await axios.get(`http://10.0.2.2:3000/movies?genre_like=${route.params.item.genre.join('&genre_like=')}`);
      setMovieData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(
        `http://192.168.1.124:3000/comments?movieId=${route.params.item.id}`
      );
      // const { data } = await axios.get(`http://10.0.2.2:3000/comments?movieId=${route.params.item.id}`);
      setCommentsData(data);
      setLoadingComments(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
    fetchComments();
  }, []);

  const handleSendComment = async () => {
    const payload = {
      id: uuid.v4(),
      movieId: route.params.item.id,
      comment: comment,
    };
    setCommentsData([...commentsData, payload]);
    setComment("");
  };

  const Item = ({ title }) => <Text style={styles.genre}>{title}</Text>;

  const renderCast = ({ item, index }) => <Tag label={item} />;
  const renderItem = ({ item, index }) => <Item title={item} />;

  const Comments = ({ item, index }) => (
    <View key={index}>
      <Text>Comment {index + 1}:</Text>
      <Text style={{ margin: 4 }}>{item.comment}</Text>
    </View>
  );

  const renderComments = ({ item, index }) => (
    <Comments item={item} index={index} />
  );

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/movie.png")} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}> {route.params.item.name}</Text>
        <View style={styles.altTitleContainer}>
          <View>
            <FlatList
              data={route.params.item.genre}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
          <Icon name="star" size={25} color="#ffd700" />
          <Text style={[styles.genre, styles.rate]}>
            {" "}
            {route.params.item.rate}
          </Text>
        </View>
        <Text style={styles.description}> {route.params.item.brief}</Text>
        <View style={styles.tagContainer}>
          <Text style={styles.tagTitle}>DIRECTOR: </Text>
          <Tag label={route.params.item.director} />
        </View>
        <View style={styles.tagContainer}>
          <Text style={styles.tagTitle}>CAST: </Text>
          <FlatList
            numColumns={2}
            // horizontal={true}
            centerContent={true}
            data={route.params.item.cast}
            renderItem={renderCast}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View style={[styles.reviewContainer]}>
        <Text style={styles.reviewTitle}>REVIEWS</Text>
        <Text style={styles.reviewDesc}>36 Reviews</Text>
        <FlatList
          data={commentsData}
          renderItem={renderComments}
          keyExtractor={(item, index) => index.toString()}
        />
        <TextInput
          style={styles.input}
          onChangeText={setComment}
          placeholder="Send Comment"
          value={comment}
        />
        <Button
          style={styles.button}
          onPress={handleSendComment}
          title="Send Comment"
          color="#841584"
        />
      </View>
      {/* <View style={{ flex: 1 }}>
        <FlatList
          renderItem={({ item }) => <MovieCard data={item} />}
          data={movieData}
          keyExtractor={(item, index) => index.toString()}
        />
      </View> */}
    </View>
  );
};

export default Detail;
