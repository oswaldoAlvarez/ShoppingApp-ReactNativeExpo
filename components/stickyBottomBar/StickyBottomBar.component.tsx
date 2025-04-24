import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./StickyBottomBar.styles";
import { useRouter } from "expo-router";
import { IProduct } from "@/interfaces/product.interface";
import { useCartStore } from "@/hooks";

interface IStickyBottomBar {
  item: IProduct;
  loading: boolean;
}

export const StickyBottomBar = ({ item, loading }: IStickyBottomBar) => {
  const [added, setAdded] = useState(false);

  const router = useRouter();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleBack = () => router.back();

  const handleAddToCart = () => {
    if (added) return;

    addToCart(item.id);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color="#555" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleAddToCart}
        style={[
          styles.button,
          {
            backgroundColor: added
              ? "#4CAF50"
              : loading
              ? "lightgray"
              : "#E5BB47",
          },
        ]}
        disabled={loading || added}
      >
        <Text style={styles.buttonText}>
          {added ? "✔ Added to Cart" : "Add to Cart"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
