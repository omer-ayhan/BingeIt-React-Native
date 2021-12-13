import React, { memo } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  ImageBackground,
} from "react-native";

import styles from "./RelatedCardStyle";
import Tag from "../Tag";
import colors from "../../style/colors";

const RelatedCard = ({ data, onSelect }) => {
  const director =
    data.director.length > 6
      ? data.director.slice(0, 6) + "..."
      : data.director;

  const name =
    data.name.length > 15 ? data.name.slice(0, 15) + "..." : data.name;

  const commaSeperator = () => <Text style={styles.genreItem}>, </Text>;

  const renderGenre = ({ item, index }) => (
    <Text style={styles.genreItem} key={index}>
      {item}
    </Text>
  );

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <ImageBackground
        source={require("../../assets/movie.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.image}>
        <View style={styles.half}>
          <View style={styles.innerContainer}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.genres}>
              <FlatList
                ItemSeparatorComponent={commaSeperator}
                horizontal={true}
                data={data.genre}
                renderItem={renderGenre}
              />
            </View>
            <Tag
              containerStyle={styles.card}
              label={data.rate}
              iconName="star"
              iconColor={colors.yellow}
            />
            <Tag
              containerStyle={styles.card}
              label={director}
              iconName="movie-open"
            />
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default memo(RelatedCard);
