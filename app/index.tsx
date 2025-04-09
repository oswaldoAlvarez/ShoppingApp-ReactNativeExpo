import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { ProductCard, Tag, TextView } from "@/components";
import { styles } from "../styles/App.styles";
import { useGetCategoryProducts, useGetProducts } from "@/hooks";

const ImgSize = 150;

export default function Page() {
  const { products } = useGetProducts();
  const { categoryProducts } = useGetCategoryProducts();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TextView
        align="flex-start"
        contentStyles={styles.titleContainer}
        textStyles={styles.title}
      >
        Catalogue
      </TextView>
      <FlatList
        data={categoryProducts}
        keyExtractor={(product) => String(product)}
        contentContainerStyle={styles.catalogueContainer}
        renderItem={({ item }) => <Tag item={item} />}
        style={{ marginTop: 16 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <TextView
        align="flex-start"
        contentStyles={styles.titleContainer}
        textStyles={styles.title}
      >
        Featured
      </TextView>
      {/* <FlatList
        data={products.slice(0, 4)}
        keyExtractor={(product) => String(product.id)}
        renderItem={({ item }) => <ProductCard item={item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      /> */}
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {products.slice(0, 4).map((item) => (
          <View key={String(item.id)} style={{ width: "50%" }}>
            <ProductCard item={item} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
