import React from "react";
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
                ItemSeparatorComponent={() => (
                  <Text style={styles.genre}>, </Text>
                )}
                horizontal={true}
                data={data.genre}
                renderItem={({ item, index }) => (
                  <Text style={styles.genre} key={index}>
                    {item}
                  </Text>
                )}
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

export default RelatedCard;
