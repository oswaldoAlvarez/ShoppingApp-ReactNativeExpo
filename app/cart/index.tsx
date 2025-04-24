import { View, FlatList } from "react-native";
import { useCartStore } from "@/hooks";
import { CartCard } from "@/components";
import { styles } from "@/styles/cart/Cart.styles";

export default function Cart() {
  const products = useCartStore((state) => state.products);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <CartCard id={item.productId} quantity={item.quantity} />
        )}
      />
    </View>
  );
}
