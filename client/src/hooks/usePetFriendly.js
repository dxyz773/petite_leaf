import { useQuery } from "@tanstack/react-query";
import { getAllPetFriendly } from "../services/plantsAPI";

export function usePetFriendly() {
  const {
    data: pet_friendly,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pet_friendly"],
    queryFn: getAllPetFriendly,
  });

  return { pet_friendly, isLoading, error };
}
