import { useQuery } from "@tanstack/react-query";
import { getPlants } from "../../services/plantsAPI";
import { useSearchParams } from "react-router-dom";

export function useProducts() {
  const [searchParams] = useSearchParams();

  // --------------------------- FILTER --------------------------------- //
  let filters = [];
  for (const [filterField, valueField] of searchParams.entries()) {
    const field = `${filterField.replaceAll("-", "_")}_id`;
    const value = Number(valueField.at(-1));
    if (field === "sortBy_id") continue;
    filters.push({
      field,
      value,
      method: "eq",
    });
  }

  // ---------------------------- SORT ----------------------------------- //
  const sortByRaw = searchParams.get("sortBy") || "featured";

  const [field, direction] = sortByRaw.split("-");

  const sortBy = { field, direction };

  const {
    data: plants,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["plants", filters, sortBy],
    queryFn: () => getPlants([filters], { sortBy }),
  });

  return { plants, isLoading, error };
}
