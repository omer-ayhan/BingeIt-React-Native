import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: 250,
    height: 250,
    margin: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  image: {
    borderRadius: 20,
  },
  half: {
    transform: [{ rotate: "-90deg" }],
    width: 250,
    height: "70%",
    backgroundColor: "rgba(0, 0, 0, 0.76)",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    padding: 10,
    marginLeft: 38,
    alignItems: "center",
  },
  innerContainer: {
    transform: [{ rotate: "90deg" }],
    height: "100%",
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    alignSelf: "center",
  },
  genres: {
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  genre: {
    color: "rgba(189, 189, 189, 1)",
  },
  brief: {
    alignSelf: "center",
    color: "white",
    fontSize: 16,
    marginHorizontal: 10,
  },

  director: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },
  rate: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },
  card: {
    width: 90,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "rgba(81, 81, 81, 1)",
    marginHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 10,
  },
});
