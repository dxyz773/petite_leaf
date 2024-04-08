import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFavorite as addFavoriteApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useUser } from "./useUser";

export function useAddFavorite() {
  const { user } = useUser();

  const id = user?.id;
  const queryClient = useQueryClient();

  const {
    mutate: addFavorite,
    isLoading: isAdding,
    isPending,
    fetchStatus,
  } = useMutation({
    mutationFn: (favorite) => addFavoriteApi(id, favorite),
    enabled: !!id,
    onSuccess: () => {
      toast.success("Favorite added!");
      queryClient.invalidateQueries(["favorites"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { addFavorite, isAdding, isPending, fetchStatus };
}
