import { View, Text, Image } from "react-native";
import { styles } from "./CartCard.styles";
import { useGetProductById } from "@/hooks";
import { TextView } from "../textView/TextView.component";

const imgSize = 100;

export const CartCard = ({ id }: any) => {
  const { productById, loading } = useGetProductById(id);

  if (loading || !productById) {
    return <Text>Cargando producto...</Text>;
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
      <View
        style={styles.counterContainer}
      ></View>
    </View>
  );
};
