import React from "react";
import { View, Text, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import uuid from "react-native-uuid";

import colors from "../../../style/colors";
import CommentWrapper from "../../../components/CommentWrapper";
import styles from "./DetailLayout.styles";
import Tag from "../../../components/Tag";

export default function DetailLayout({ item }) {
  const { name, genre, rate, brief, director, cast, id } = item;

  const renderCast = ({ item }) => <Tag label={item} />;

  const extractCastId = (item, index) => `${item}?___?${index}`;

  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.altTitleContainer}>
        <View style={styles.genreContainer}>
          {genre.map((item) => (
            <Text key={uuid.v4().toString()} style={styles.genre}>
              {item}
            </Text>
          ))}
        </View>
        <Icon name="star" size={25} color={colors.yellow} />
        <Text style={[styles.genre, styles.rate]}> {rate}</Text>
      </View>
      <Text style={styles.description}> {brief}</Text>
      <View style={styles.tagContainer}>
        <Text style={styles.tagTitle}>DIRECTOR: </Text>
        <Tag label={director} />
      </View>
      <View style={styles.tagContainer}>
        <Text style={styles.tagTitle}>CAST: </Text>
        <FlatList
          listKey="cast"
          numColumns={2}
          centerContent={true}
          data={cast}
          renderItem={renderCast}
          keyExtractor={extractCastId}
        />
      </View>
      <CommentWrapper commentID={id} />
    </View>
  );
}
