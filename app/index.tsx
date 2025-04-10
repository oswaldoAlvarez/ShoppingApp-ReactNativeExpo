import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import { ProductCard, Tag, TextView } from "@/components";
import { styles } from "../styles/App.styles";
import { useGetCategoryProducts, useGetProducts } from "@/hooks";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

  const { products, loading } = useGetProducts(selectedCategory);
  const { categoryProducts } = useGetCategoryProducts();

  const handleTagPress = (category: string) => {
    setSelectedCategory(category);
  };

  const showAllProducts = () => {
    setSelectedCategory(undefined);
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(product) => String(product.id)}
      renderItem={({ item }) => <ProductCard item={item} />}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.columWrapper}
      ListHeaderComponent={
        <>
          <View style={styles.containerHeader}>
            <TextView
              contentStyles={styles.titleContainer}
              textStyles={styles.title}
            >
              Catalogue
            </TextView>
            <TouchableOpacity activeOpacity={0.6} onPress={showAllProducts}>
              <TextView textStyles={styles.seeAllProducts}>
                See all products
              </TextView>
            </TouchableOpacity>
          </View>
          <FlatList
            data={categoryProducts}
            keyExtractor={(product) => String(product)}
            renderItem={({ item }) => (
              <Tag item={item} onPress={() => handleTagPress(item)} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.catalogueContainer}
            style={styles.categorySlice}
          />
          <TextView
            contentStyles={[styles.titleContainer, styles.marginTop]}
            textStyles={styles.title}
          >
            Featured
          </TextView>
          {loading && (
            <View style={styles.waiter}>
              <ActivityIndicator size="large" color="#0000ff" />
              <TextView>Loading...</TextView>
            </View>
          )}
        </>
      }
    />
  );
}
