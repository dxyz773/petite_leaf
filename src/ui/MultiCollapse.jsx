import Collapse from "./Collapse";
import Loading from "./Loading";
import { useWater } from "../hooks/useWater";
import { useLight } from "../hooks/useLight";
import { useCare } from "../hooks/useCare";
import { usePetFriendly } from "../hooks/usePetFriendly";
import { usePrice } from "../hooks/usePrice";

function MultiCollapse() {
  const { water, isLoading: waterLoading } = useWater();
  const { light, isLoading: lightLoading } = useLight();
  const { care, isLoading: careLoading } = useCare();
  const { pet_friendly, isLoading: petFriendlyLoading } = usePetFriendly();
  const { price, isLoading: priceLoading } = usePrice();

  const categories = [
    { name: "water", data: water, loading: waterLoading },
    { name: "light", data: light, loading: lightLoading },
    { name: "care", data: care, loading: careLoading },
    { name: "pet_friendly", data: pet_friendly, loading: petFriendlyLoading },
    { name: "price", data: price, loading: priceLoading },
  ];
  if (
    waterLoading ||
    lightLoading ||
    careLoading ||
    petFriendlyLoading ||
    priceLoading
  ) {
    return <Loading />;
  }

  return (
    <div className="w-72">
      {categories?.map((category) => (
        <Collapse
          key={category.name}
          title={category?.name}
          category={category?.data}
          isLoading={category.loading}
        />
      ))}
    </div>
  );
}

export default MultiCollapse;
