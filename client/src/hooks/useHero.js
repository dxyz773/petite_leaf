import { useQuery } from "@tanstack/react-query";
import { getAllHero } from "../services/plantsAPI";

export function useHero() {
  const {
    data: hero,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["hero"],
    queryFn: getAllHero,
  });

  return { hero, isLoading, error };
}
