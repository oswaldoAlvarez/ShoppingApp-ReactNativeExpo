import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 140,
    borderBottomWidth: 1,
    borderColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
  },
  imgContainer: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionContainer: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
    color: "#3a343c",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
  },
  counterContainer: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
  },
});
