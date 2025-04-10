import { IProduct } from "@/interfaces/product.interface";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProductById = async (productId: number): Promise<IProduct> => {
  try {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );

    return data;
  } catch (error) {
    throw Error(`Error: ${error}`);
  }
};

export const useGetProductById = (productId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["productById", productId],
    queryFn: () => fetchProductById(productId),
    staleTime: 1000 * 60 * 60,
  });

  return {
    productById: data,
    loading: isLoading,
  };
};
