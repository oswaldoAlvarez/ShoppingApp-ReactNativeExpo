import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./StickyBottomBar.styles";
import { useRouter } from "expo-router";
import { IProduct } from "@/interfaces/product.interface";
import { addProductToCart } from "@/actions/addProductToCard";

interface IStickyBottomBar {
  item: IProduct;
  loading: boolean;
}

export const StickyBottomBar = ({ item, loading }: IStickyBottomBar) => {
  const router = useRouter();

  const handleBack = () => router.back();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color="#555" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => (addProductToCart(1, item.id), handleBack())}
        style={[
          styles.button,
          { backgroundColor: loading ? "lightgray" : "#E5BB47" },
        ]}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};
