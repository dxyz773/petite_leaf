import { useQuery } from "@tanstack/react-query";
import { getAllWater } from "../services/plantsAPI";

export function useWater() {
  const {
    data: water,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["water"],
    queryFn: getAllWater,
  });

  return { water, isLoading, error };
}
