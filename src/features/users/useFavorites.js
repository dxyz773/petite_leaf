import { useQuery } from "@tanstack/react-query";
import { getFavoritesByUserId } from "../../services/apiAuth";
import { useUser } from "./useUser";

export function useFavorites() {
  const { user } = useUser();

  const id = user?.id;
  const {
    data: favorites,
    isPending,
    fetchStatus,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["favorites", id],
    queryFn: () => getFavoritesByUserId(id),
    enabled: !!id,
  });

  return { favorites, isLoading, error, isPending, fetchStatus };
}
