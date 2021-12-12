import React, { memo, useEffect } from "react";
import { View, Text, FlatList } from "react-native";

import useFetchEffect from "../../hooks/useFetchEffect";
import colors from "../../style/colors";
import RelatedCard from "../RelatedCard";
import StatusIndicator from "../StatusIndicator";
import styles from "./RelatedMovies.styles";

function RelatedMovies({ genre, movieId }) {
  const urlDetail = `http://192.168.1.124:3000/movies?genre_like=${genre.join(
    "&genre_like=" // url for all the related genres in the movies data
  )}`;
  const [slicedData, setSlicedData] = React.useState([]);
  const { data: movieData, error, loading } = useFetchEffect(urlDetail);

  useEffect(() => {
    if (movieData) {
      const filteredData = movieData.filter((movie) => movie.id !== movieId);
      setSlicedData(filteredData.slice(0, 4));
    }
  }, [movieData]);

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

  const extractRelatedId = (_, index) => `${index + 1}?__|m|_?${index}`;

  const renderRelated = ({ item }) => <RelatedCard data={item} />;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "transparent",
      }}>
      <Text style={styles.title}>Related</Text>
      <FlatList
        listKey="related"
        horizontal={true}
        renderItem={renderRelated}
        data={slicedData}
        keyExtractor={extractRelatedId}
      />
    </View>
  );
}

export default memo(RelatedMovies);
