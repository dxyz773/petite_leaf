import { useQuery } from "@tanstack/react-query";
import { getAllPrices } from "../services/plantsAPI";

export function usePrice() {
  const {
    data: price,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["price"],
    queryFn: getAllPrices,
  });

  return { price, isLoading, error };
}
