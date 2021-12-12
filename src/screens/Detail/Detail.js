import React from "react";
import { View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

import VirtualizedList from "../../components/VirtulizedList";
import styles from "./DetailStyle";
import RelatedMovies from "../../components/RelatedMovies";
import DetailLayout from "./layout/DetailLayout";

const Detail = () => {
  const route = useRoute();

  return (
    <VirtualizedList>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/movie.png")}
        />
        <DetailLayout item={route.params.item} />

        <RelatedMovies
          genre={route.params.item.genre}
          movieId={route.params.item.id}
        />
      </View>
    </VirtualizedList>
  );
};

export default Detail;
