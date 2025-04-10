import { IProduct } from "@/interfaces/product.interface";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async (category?: string): Promise<IProduct[]> => {
  try {
    const url = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : `https://fakestoreapi.com/products`;

    const { data } = await axios.get<IProduct[]>(url);

    return data;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

export const useGetProducts = (category?: string) => {
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", category],
    queryFn: () => fetchProducts(category),
    staleTime: 1000 * 60 * 60,
  });

  return {
    products: data,
    loading: isLoading,
    refetch,
  };
};
