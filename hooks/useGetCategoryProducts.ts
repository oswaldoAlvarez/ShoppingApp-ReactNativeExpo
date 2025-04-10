import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCategoryProducts = async (): Promise<string> => {
  try {
    const { data } = await axios.get<string>(
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
