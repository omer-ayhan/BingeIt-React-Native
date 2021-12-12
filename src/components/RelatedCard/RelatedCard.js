import React from "react";
import { View, Text, TouchableWithoutFeedback, FlatList, ImageBackground } from "react-native";
import styles from "./RelatedCardStyle"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RelatedCard = ({ data, onSelect }) => {


    return (
        <TouchableWithoutFeedback onPress={onSelect}>


            <ImageBackground source={require('../../assets/movie.png')} resizeMode="cover" style={styles.container} imageStyle={styles.image}>


                <View></View>
                <View style={styles.half}>
                    <Text style={styles.name}>{data.name}</Text>
                    <View style={styles.genres}>
                        <FlatList
                            ItemSeparatorComponent={() => <Text style={styles.genre}>, </Text>}
                            horizontal={true}
                            data={data.genre}
                            renderItem={({ item, index }) => <Text style={styles.genre} key={index}>{item}</Text>}
                        />
                    </View>
                    <View style={styles.card}>
                        <Icon name="star" size={18} color="rgba(251, 211, 0, 1)" />
                        <Text style={styles.rate}>{data.rate}</Text>
                    </View>
                    <View style={styles.card}>
                        <Icon name="movie-open" size={18} color="white" />
                        <Text style={styles.director}>{data.director}</Text>
                    </View>
                </View>





            </ImageBackground>

        </TouchableWithoutFeedback>
    )
};

export default RelatedCard;