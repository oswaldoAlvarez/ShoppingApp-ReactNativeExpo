import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchProducts = async (): Promise<any> => {
  try {
    const { data } = await axios.get<any>(`https://fakestoreapi.com/products/`);

    return data;
  } catch (error) {
    throw Error(`Error: ${error}`);
  }
};

export const useGetProducts = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
    staleTime: 1000 * 60 * 60,
  });

  return {
    products: data,
    loading: isLoading,
  };
};
