import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import uuid from "react-native-uuid";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import RelatedCard from "../../components/RelatedCard";
import MovieCard from "../../components/MovieCard";
import Tag from "../../components/Tag";
import VirtualizedList from "../../components/VirtulizedList";
import styles from "./DetailStyle";
import Comments from "../../components/Comments";
import Button from "../../components/Button";
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

  const renderCast = ({ item, index }) => <Tag label={item} />;

  const renderComments = ({ item, index }) => (
    <Comments item={item} index={index} />
  );

  return (
    <VirtualizedList>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/movie.png")}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.title}> {route.params.item.name}</Text>
          <View style={styles.altTitleContainer}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
              }}>
              {route.params.item.genre.map((item) => (
                <Text key={uuid.v4().toString()} style={styles.genre}>
                  {item}
                </Text>
              ))}
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
              listKey="cast"
              numColumns={2}
              centerContent={true}
              data={route.params.item.cast}
              renderItem={renderCast}
              keyExtractor={(item, index) => `${item}?___?${index}`}
            />
          </View>
          <View style={[styles.reviewContainer]}>
            <Text style={styles.reviewTitle}>REVIEWS</Text>
            <Text style={styles.reviewDesc}>
              {commentsData?.length} Reviews
            </Text>
            <View>
              <FlatList
                listKey="review"
                data={commentsData}
                renderItem={renderComments}
                keyExtractor={(_, index) => `${index + 1}?__|_?${index}`}
              />
            </View>
            <View style={styles.addReviewContainer}>
              <TextInput
                style={styles.input}
                onChangeText={setComment}
                placeholder="Send Comment"
                value={comment}
                multiline
              />
              <Button onPress={handleSendComment} title="Send Comment" />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "transparent",
          }}>
          <Text style={styles.reviewTitle}>Related</Text>
          <FlatList
            listKey="related"
            horizontal={true}
            renderItem={({ item }) => <RelatedCard data={item} />}
            data={movieData}
            keyExtractor={(_) => uuid.v4().toString()}
          />
        </View>
      </View>
    </VirtualizedList>
  );
};

export default Detail;
