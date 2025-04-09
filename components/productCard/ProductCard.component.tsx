import { View, TouchableOpacity, Image } from "react-native";
import { TextView } from "../textView/TextView.component";
import { Ionicons } from "@expo/vector-icons";
import { IProduct } from "@/interfaces/product.interface";
import { styles } from "./ProductCard.styles";

const ImgSize = 150;

interface IProductCard {
  item: IProduct;
}

export const ProductCard = ({ item }: IProductCard) => (
  <TouchableOpacity activeOpacity={0.6} style={styles.touchableContainer}>
    <Image
      source={{ uri: item.image }}
      width={ImgSize}
      height={ImgSize}
      style={styles.img}
    />
    <View style={styles.rateContainer}>
      <TextView contentStyles={styles.textContainer} textStyles={styles.text}>
        {item.rating.rate}
      </TextView>
      <Ionicons name="star" size={20} color="#F2994A" />
    </View>
    <TextView
      contentStyles={styles.descriptionContainer}
      textStyles={styles.description}
      numberOfLines={2}
    >
      {item.title}
    </TextView>
    <TextView contentStyles={styles.priceContainer} textStyles={styles.price}>
      {`$${item.price}`}
    </TextView>
  </TouchableOpacity>
);
