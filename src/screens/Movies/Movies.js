import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./MoviesStyle"
import axios from "axios";
import MovieCard from "../../components/MovieCard";

const Movies = () => {

    const [movieData, setMovieData] = useState();
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const { data } = await axios.get("http://10.0.2.2:3000/movies");
            setMovieData(data)
            setLoading(false);
        } catch (error) {
            console.log(error)
        }

    };


    useEffect(() => {
        fetchData()
    }, []);

    const handleCardSelect = (url) => {
        navigation.navigate('EpisodePage', { url })
    };

    if (loading) {
        return (
            <View>
                <Text>Loading</Text>
            </View>
        )
    }
    return (
        <View>

            <FlatList
                renderItem={({ item }) => <MovieCard data={item} onSelect={() => handleCardSelect(item)} />}
                data={movieData}
                keyExtractor={item => item.id}
                numColumns={"1"}
            />
        </View>
    )
};

export default Movies;