import { useNavigate } from "react-router-dom";

function SearchResult({ plant, closeSearch }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(
          `/products/${plant.main_name}`.toLowerCase().replaceAll(" ", "-"),
        );
        closeSearch();
      }}
    >
      <div className="flex gap-2 border-b py-2 hover:cursor-pointer hover:bg-neutral-500/5 hover:bg-gradient-to-tr">
        <img
          className="w-[116px] pl-3"
          src={plant.main_img}
          alt={plant.main_name}
        />
        <div className="w-[23rem] pt-3 sm:w-[30rem]">
          <h4 className="mb-1 text-sm font-normal underline underline-offset-4">
            {plant.main_name}
          </h4>
          <p className="text-xs">{plant.botanical_name}</p>
          <p className="text-xs">{plant.alternate_names}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
