import { useQuery } from "@tanstack/react-query";
import { getOrdersByUserID } from "../../services/apiAuth";
import { useUser } from "./useUser";

export function useUserOrders() {
  const { user } = useUser();

  const id = user?.id;
  const { data: orders, isLoading } = useQuery({
    queryKey: ["user_orders", id],
    queryFn: () => getOrdersByUserID(id),
    enabled: !!id,
  });

  return { orders, isLoading };
}
