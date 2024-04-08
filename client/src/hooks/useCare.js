import { useQuery } from "@tanstack/react-query";
import { getAllCare } from "../services/plantsAPI";
export function useCare() {
  const {
    data: care,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["care"],
    queryFn: getAllCare,
  });

  return { care, isLoading, error };
}
