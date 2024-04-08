import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAddressByAddressId } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateAddress() {
  const queryClient = useQueryClient();
  const { mutate: updateAddress, isLoading: isUpdating } = useMutation({
    mutationFn: updateAddressByAddressId,
    onSuccess: () => {
      toast.success("Address successfully updated");
      queryClient.invalidateQueries(["userAddresses"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateAddress, isUpdating };
}
