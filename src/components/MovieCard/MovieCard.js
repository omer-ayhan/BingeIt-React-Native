import React from "react";
import { View, Text, TouchableWithoutFeedback, FlatList } from "react-native";
import styles from "./MovieCardStyle"


const MovieCard = ({ data, onSelect }) => {


    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container} >

                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{data.name}</Text>
                </View>
                <Text style={styles.brief} numberOfLines={2} >{data.brief} ...</Text>
                <View style={styles.genreContainer}>
                    <FlatList numColumns={3} data={data.genre} renderItem={({ item, index }) => <Text style={styles.genre} key={index}>{item}</Text>} />
                </View>
                <View style={styles.directorContainer}>
                    <Text style={styles.director}>{data.director}</Text>
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
};

export default MovieCard;