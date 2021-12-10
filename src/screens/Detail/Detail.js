import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TextInput, Button } from "react-native";
import styles from "./DetailStyle"
import { useRoute } from '@react-navigation/native';
import MovieCard from "../../components/MovieCard"
import axios from "axios"
import uuid from 'react-native-uuid';
const Detail = () => {

    const route = useRoute();

    const [movieData, setMovieData] = useState();
    const [loading, setLoading] = useState(true);
    const [commentsData, setCommentsData] = useState();
    const [loadingComments, setLoadingComments] = useState(true);
    const [comment, setComment] = useState("");


    const fetchMovies = async () => {
        try {
            const { data } = await axios.get(`http://10.0.2.2:3000/movies?genre_like=${route.params.item.genre.join('&genre_like=')}`);
            setMovieData(data)
            setLoading(false);
        } catch (error) {
            console.log(error)
        }

    };

    const fetchComments = async () => {
        try {
            const { data } = await axios.get(`http://10.0.2.2:3000/comments?movieId=${route.params.item.id}`);
            setCommentsData(data)
            setLoadingComments(false);
        } catch (error) {
            console.log(error)
        }

    };
    useEffect(() => {
        fetchMovies()
        fetchComments()
    }, []);

    const handleSendComment = async () => {
        const payload = { id: uuid.v4(), movieId: route.params.item.id, comment: comment };
        setCommentsData([...commentsData, payload])
        setComment("")
    }

    const Item = ({ title }) => (
        <Text style={{ margin: 4 }}>{title}</Text>
    );

    const renderItem = ({ item, index }) => (
        <Item title={item} key={index} />
    );


    const Comments = ({ item, index }) => (
        <View key={index}>
            <Text>Comment {index + 1}:</Text>
            <Text style={{ margin: 4 }}>{item.comment}</Text>
        </View>
    );

    const renderComments = ({ item, index }) => (
        <Comments item={item} index={index} />
    );


    return (
        <View style={styles.container}>
            <View style={{ flex: 2 }}>
                <Text>NAME:  {route.params.item.name}</Text>
                <Text>DIRECTOR: {route.params.item.director}</Text>
                <Text>CAST:</Text>
                <FlatList
                    data={route.params.item.cast}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
                <Text>BRIEF:  {route.params.item.brief}</Text>
                <Text>GENRES:</Text>
                <FlatList
                    data={route.params.item.genre}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
                <Text>RATE: {route.params.item.rate}</Text>
            </View>
            <View style={{ borderWidth: 1 }} />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={commentsData}
                    renderItem={renderComments}
                    keyExtractor={(item, index) => index.toString()}

                />
                <TextInput
                    style={styles.input}
                    onChangeText={setComment}
                    placeholder="Send Comment"
                    value={comment}
                />
                <Button
                    onPress={handleSendComment}
                    title="Send Comment"
                    color="#841584"
                />
            </View>
            <View style={{ borderWidth: 1 }} />
            <View style={{ flex: 1 }}>
                <FlatList
                    renderItem={({ item }) => <MovieCard data={item} />}
                    data={movieData}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

        </View>
    )
};

export default Detail;