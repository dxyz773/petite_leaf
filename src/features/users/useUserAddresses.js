import { useQuery } from "@tanstack/react-query";
import { getAddressesByUserId } from "../../services/apiAuth";
import { useUser } from "./useUser";

export function useUserAddresses() {
  const { user } = useUser();

  const id = user?.id;
  const { data: addresses, isLoading } = useQuery({
    queryKey: ["userAddresses", id],
    queryFn: () => getAddressesByUserId(id),
    enabled: !!id,
  });

  return { addresses, isLoading };
}
