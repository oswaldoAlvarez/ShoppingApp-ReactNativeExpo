import { IProduct } from "@/interfaces/product.interface";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchCategoryProducts = async (): Promise<any[]> => {
  try {
    const { data } = await axios.get<any>(
      `https://fakestoreapi.com/products/categories`
    );

    return data;
  } catch (error) {
    throw Error(`Error: ${error}`);
  }
};

export const useGetCategoryProducts = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["categoryProducts"],
    queryFn: () => fetchCategoryProducts(),
    staleTime: 1000 * 60 * 60,
  });

  return {
    categoryProducts: data,
    loading: isLoading,
  };
};
