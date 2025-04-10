import React from "react";
import { StickyBottomBar, TextView } from "@/components";
import { IProduct } from "@/interfaces/product.interface";
import { styles } from "@/styles/product/Product.styles";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { View, ScrollView, Image, ActivityIndicator } from "react-native";
import { useGetProductById } from "@/hooks";

const productObj: IProduct = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
  quantity: 0,
};

export default function Product() {
  const { productId } = useLocalSearchParams();
  const { productById: product = productObj, loading } = useGetProductById(
    +productId
  );

  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      {loading ? (
        <View style={styles.waiter}>
          <ActivityIndicator size="large" color="#0000ff" />
          <TextView>Loading...</TextView>
        </View>
      ) : (
        <>
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
          >
            <Image
              source={{
                uri: product?.image,
              }}
              style={[styles.image]}
              resizeMode="contain"
            />
            <View style={styles.content}>
              <View style={styles.reviewContainer}>
                <View style={styles.starContainer}>
                  {stars.map((_, index) => (
                    <Ionicons
                      key={index}
                      name="star"
                      size={20}
                      color="#F2994A"
                    />
                  ))}
                  <TextView
                    style={styles.reviews}
                  >{`${product?.rating.count} reviews`}</TextView>
                </View>
                <TextView style={styles.stock}>In Stock</TextView>
              </View>
              <TextView style={styles.title}>{product?.title}</TextView>
              <TextView textStyles={styles.price}>${product?.price}</TextView>
            </View>
            <View style={styles.separatorContainer}>
              <View style={styles.separator} />
            </View>
            <View style={{ marginHorizontal: 16 }}>
              <TextView textStyles={{ fontWeight: 700, fontSize: 24 }}>
                Product details
              </TextView>
              <TextView textStyles={styles.details}>
                {product?.description}
              </TextView>
            </View>
          </ScrollView>
        </>
      )}
      <StickyBottomBar item={product} loading={loading} />
    </>
  );
}
