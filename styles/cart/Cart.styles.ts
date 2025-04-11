import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 0 : 20,
    flex: 1,
  },
});
