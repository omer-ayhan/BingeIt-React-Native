import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    borderRadius: 20,
  },
  image: {
    flex: 1,
    borderRadius: 20,
  },
  half: {
    marginTop: 100,
    backgroundColor: "rgba(0, 0, 0, 0.76)",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    padding: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 25,
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
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "rgba(81, 81, 81, 1)",
    marginHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
