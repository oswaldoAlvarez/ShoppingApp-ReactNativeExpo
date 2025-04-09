import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  titleContainer: {
    marginTop: Platform.OS === "android" ? 10 : 30,
    marginBottom: 10,
    marginLeft: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  catalogueContainer: {
    paddingHorizontal: 12,
  },
  // stylesFlatlist: {
  //   marginBottom: 80,
  // },
});
