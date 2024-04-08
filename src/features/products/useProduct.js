import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPlantByMain_Name } from "../../services/plantsAPI";

export function useProduct() {
  const { name } = useParams();

  const main_name_search = name
    ?.split("-")
    .map((word) => word.at(0).toUpperCase() + word.slice(1))
    .join(" ");

  const {
    data: plant,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["plant", main_name_search],
    queryFn: () => getPlantByMain_Name(main_name_search),
    retry: false,
  });

  return {
    plant,
    isLoading,
    error,
  };
}
