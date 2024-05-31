import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getSingleProduct = async (id: number) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response;
};

export const useGetSingleProduct = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProduct(id),
  });
};
