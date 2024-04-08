import { useMutation } from "@tanstack/react-query";
import { registerOrder } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckout() {
  const navigate = useNavigate();
  const { mutate: order, isLoading: ordering } = useMutation({
    mutationFn: registerOrder,
    onSuccess: (data) => {
      const [{ order_number }] = data;
      navigate(`/order/${order_number}`);
    },
    onError: (error) => {
      console.log("ERROR", error);
      toast.error(error?.message);
    },
  });

  return { order, ordering };
}
