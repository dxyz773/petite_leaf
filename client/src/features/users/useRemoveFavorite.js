import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { removeFavorite as removeFavoriteApi } from "../../services/apiAuth";

export function useRemoveFavorite() {
  const queryClient = useQueryClient();

  const { mutate: removeFavorite, isLoading: isDeleting } = useMutation({
    mutationFn: removeFavoriteApi,
    onSuccess: () => {
      toast.success("Favorite removed!");
      queryClient.invalidateQueries(["favorites"]);
    },
    onError: (error) => toast.error(error.message),
  });

  return { removeFavorite, isDeleting };
}
