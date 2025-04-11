import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./CartCard.styles";
import { useGetProductById } from "@/hooks";
import { TextView } from "../textView/TextView.component";
import { Btn } from "../btn/Btn.component";

const imgSize = 100;

interface ICartCard {
  id: number;
  quantity: number;
}

export const CartCard = ({ id, quantity }: ICartCard) => {
  const { productById, loading } = useGetProductById(id);

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
        <Btn text="+" />
        <TextView textStyles={styles.quantity}>{quantity}</TextView>
        <Btn text="-" />
      </View>
    </View>
  );
};
