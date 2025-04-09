import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    height: Platform.OS === "ios" ? 120 : 100,
  },
  androidRipple: {
    color: "transparent",
  },
  header: {
    height: 100,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
});
