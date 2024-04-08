import { useQuery } from "@tanstack/react-query";
import { getRandomProductsByFilter } from "../../services/plantsAPI";

export function useRandomProducts() {
  const randomFilters = [
    { care_id: 1 },
    { care_id: 3 },
    { light_id: 3 },
    { light_id: 4 },
    { light_id: 2 },
    { water_id: 1 },
    { price_id: 2 },
    { price_id: 1 },
    { pet_friendly_id: 1 },
    { water_id: 2 },
  ];
  let randomNum = Math.trunc(Math.random() * randomFilters.length);

  const {
    data: randomProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["random"],
    queryFn: () => getRandomProductsByFilter(randomFilters[randomNum]),
  });

  return { randomProducts, isLoading, error };
}
