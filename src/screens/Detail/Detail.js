import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import uuid from "react-native-uuid";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Tag from "../../components/Tag";
import VirtualizedList from "../../components/VirtulizedList";
import styles from "./DetailStyle";
import RelatedMovies from "../../components/RelatedMovies";
import CommentWrapper from "../../components/CommentWrapper";
const Detail = () => {
  const route = useRoute();

  const renderCast = ({ item }) => <Tag label={item} />;

  const extractCastId = (item, index) => `${item}?___?${index}`;

  return (
    <VirtualizedList>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/movie.png")}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{route.params.item.name}</Text>
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
              keyExtractor={extractCastId}
            />
          </View>
          <CommentWrapper commentID={route.params.item.id} />
        </View>
        <RelatedMovies genre={route.params.item.genre} />
      </View>
    </VirtualizedList>
  );
};

export default Detail;
