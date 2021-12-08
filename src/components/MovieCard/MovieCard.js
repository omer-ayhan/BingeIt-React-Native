import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./MovieCardStyle"


const MovieCard = ({ data, onSelect }) => {


    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container} >

                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{data.name}</Text>
                </View>

                <View style={styles.directorContainer}>
                    <Text style={styles.director}>{data.director}</Text>
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
};

export default MovieCard;