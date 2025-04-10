import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUserCart = async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/carts/user/1");

    return data[data.length - 1];
  } catch (error) {
    throw Error(`Error: ${error}`);
  }
};

export const useUserCart = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["user-cart", 1],
    queryFn: () => fetchUserCart(),
    staleTime: 1000 * 60,
  });

  return {
    cart: data,
    loading: isLoading,
  };
};
