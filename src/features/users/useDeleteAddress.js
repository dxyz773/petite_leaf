import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAddress as deleteAddressApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
export function useDeleteAddress() {
  const queryClient = useQueryClient();
  const { mutate: deleteAddress, isLoading: isDeleting } = useMutation({
    mutationFn: deleteAddressApi,
    onSuccess: () => {
      toast.success("Address successfully deleted");
      queryClient.invalidateQueries(["userAddresses"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteAddress, isDeleting };
}
