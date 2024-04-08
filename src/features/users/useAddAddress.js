import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAddress as addAddressApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
export function useAddAddress() {
  const queryClient = useQueryClient();
  const { mutate: addAddress, isLoading: isAdding } = useMutation({
    mutationFn: addAddressApi,
    onSuccess: () => {
      toast.success("Address successfully added");
      queryClient.invalidateQueries(["userAddresses"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { addAddress, isAdding };
}
