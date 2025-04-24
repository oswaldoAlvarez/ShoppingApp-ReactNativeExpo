import { TouchableOpacity } from "react-native";
import { TextView } from "@/components";
import { useCartStore } from "@/hooks";
import { styles } from "./HeaderDeleteCart.styles";

export const HeaderDeleteCart = () => {
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <TouchableOpacity onPress={clearCart} style={styles.container}>
      <TextView textStyles={styles.text}>Delete Cart</TextView>
    </TouchableOpacity>
  );
};
