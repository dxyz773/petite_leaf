import { useQuery } from "@tanstack/react-query";
import { getAllLight } from "../services/plantsAPI";

export function useLight() {
  const {
    data: light,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["light"],
    queryFn: getAllLight,
  });

  return { light, isLoading, error };
}
