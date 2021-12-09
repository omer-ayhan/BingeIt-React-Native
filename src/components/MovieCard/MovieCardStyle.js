import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        borderRadius: 10,
        backgroundColor: "rgba(60,62,68,0.85)",
        padding: 2
    },

    name: {
        fontWeight: "bold",
        fontSize: 30,
        color: "white"
    },

    director: {
        color: "white",
        fontSize: 20,
        marginLeft: 6
    },

    nameContainer: {
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    directorContainer: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    genre: {
        margin: 2,
        alignSelf: "center"
    },
    genreContainer: {
        alignSelf: "center"
    }


});