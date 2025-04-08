import { useRouter } from "expo-router";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default function Catalogue() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}
