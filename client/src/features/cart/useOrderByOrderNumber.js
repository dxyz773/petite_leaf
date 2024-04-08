import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrdersByOrderNumber } from "../../services/apiAuth";

export function useOrderByOrderNumber() {
  const { orderNumber } = useParams();
  const { data: order, isLoading } = useQuery({
    queryKey: ["order/orderNumber", orderNumber],
    queryFn: () => getOrdersByOrderNumber(orderNumber),
  });

  return { order, isLoading };
}
