import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getAllProducts = async () => {
  const response = await axios.get(" https://fakestoreapi.com/products");
  return response;
};

export const useGetAllProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: getAllProducts });
};
