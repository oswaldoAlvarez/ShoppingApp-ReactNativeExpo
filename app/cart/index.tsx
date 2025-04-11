import { View, FlatList } from "react-native";
import { useUserCart } from "@/hooks";
import { CartCard } from "@/components";
import { styles } from "@/styles/cart/Cart.styles";

export default function Cart() {
  const { cart } = useUserCart();

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.products}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <CartCard id={item.productId} quantity={item.quantity} />
        )}
      />
    </View>
  );
}
