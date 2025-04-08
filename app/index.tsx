import { useGetProducts } from "@/hooks/useGetProducts";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

export default function Page() {
  const router = useRouter();
  const { products } = useGetProducts();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id}
        // style={styles.flatlist}
        // ListHeaderComponent={ListHeader}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 20,
              marginHorizontal: 20,
            }}
          >
            {/* <Image>{item.title}</Image> */}
            <Image source={{ uri: item.image }} width={130} height={130} />
          </View>
        )}
        numColumns={2}
        // onEndReached={() => fetchNextPage()}
        // onEndReachedThreshold={0.6}
        showsVerticalScrollIndicator={false}
        // horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "nunito",
    alignSelf: "flex-start",
    marginVertical: 10,
  },
});
