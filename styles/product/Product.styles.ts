import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
  },
  content: {
    padding: 16,
  },
  reviews: {
    fontSize: 14,
    color: "#666",
    marginLeft: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#3a343c",
  },
  stock: {
    color: "green",
    fontWeight: "bold",
  },
  separator: {
    width: "90%",
    borderBottomWidth: 1,
    borderColor: "#c7bccd",
    marginVertical: 20,
  },
  separatorContainer: {
    alignItems: "center",
  },
  price: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 20 : 80,
  },
  details: {
    color: "#929292",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 120,
  },
  waiter: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
