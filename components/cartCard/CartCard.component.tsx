import { View, Image } from "react-native";
import { styles } from "./CartCard.styles";
import { useCartStore, useGetProductById } from "@/hooks";
import { TextView } from "../textView/TextView.component";
import { Btn } from "../btn/Btn.component";

const imgSize = 100;

interface ICartCard {
  id: number;
  quantity: number;
}

export const CartCard = ({ id, quantity }: ICartCard) => {
  const { productById, loading } = useGetProductById(id);

  const addToCart = useCartStore((state) => state.addToCart);
  const reduceCart = useCartStore((state) => state.reduceCart);

  if (loading || !productById) {
    return (
      <TextView contentStyles={styles.container}>Cargando producto...</TextView>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: productById.image }}
          width={imgSize}
          height={imgSize}
          resizeMode="contain"
        />
      </View>
      <View style={styles.descriptionContainer}>
        <TextView textStyles={styles.title}>{productById.title}</TextView>
        <TextView textStyles={styles.price}>${productById.price}</TextView>
      </View>
      <View style={styles.counterContainer}>
        <Btn text="+" onPress={() => addToCart(id)} />
        <TextView textStyles={styles.quantity}>{quantity}</TextView>
        <Btn text="-" onPress={() => reduceCart(id)} />
      </View>
    </View>
  );
};
