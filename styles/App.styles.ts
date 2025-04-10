import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  titleContainer: {
    marginLeft: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  catalogueContainer: {
    paddingHorizontal: 12,
  },
  card: {
    width: "50%",
  },
  categorySlice: {
    marginTop: 16,
  },
  columWrapper: {
    justifyContent: "space-around",
  },
  waiter: {
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Platform.OS === "android" ? 10 : 30,
  },
  marginTop: {
    marginTop: Platform.OS === "android" ? 10 : 30,
  },
  seeAllProducts: {
    color: "gray",
    fontSize: 16,
    marginRight: 12,
  },
});
