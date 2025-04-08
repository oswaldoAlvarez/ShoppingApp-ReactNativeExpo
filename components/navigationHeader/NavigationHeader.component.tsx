import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./NavigationHeader.styles";

export const NavigationHeader = () => {
  return (
    <LinearGradient
      colors={["#231f1f", "#5c247a"]} // Degradado entre dos tonos de morado, por ejemplo
      style={styles.container}
      start={{ x: 0, y: 0 }} // Opcional: definir dónde inicia el gradiente
      end={{ x: 0.3, y: 0 }} // Opcional: definir dónde termina (horizontal en este caso)
    >
      <Text>NavigationHeader</Text>
    </LinearGradient>
  );
};
