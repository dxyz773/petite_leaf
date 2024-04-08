import ListItem from "./ListItem";
import MultiCollapse from "./MultiCollapse";
import Loading from "./Loading";
import { useProducts } from "../features/products/useProducts";
import { useSearchParams } from "react-router-dom";

function List() {
  const { plants, isLoading } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const noResults = plants?.length < 1;

  function removeAllFilters() {
    for (const [key, value] of searchParams.entries()) {
      setSearchParams(searchParams.delete(key, value));
    }
  }
  return (
    <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-5">
      <div className="hidden lg:row-span-full lg:block lg:w-[300px]">
        <p className="border-b border-b-neutral-300 pb-5 pl-4 text-[14px]">
          Filter:
        </p>
        <MultiCollapse />
      </div>
      <ul
        className={
          noResults
            ? ""
            : "mt-10 flex flex-col items-center gap-4 pl-1 lg:grid lg:grid-cols-3 xl:gap-5"
        }
      >
        {isLoading ? (
          <Loading />
        ) : noResults ? (
          <div className="ml-6 mt-36 font-serif tracking-wider sm:ml-20 md:ml-36 lg:ml-32 xl:ml-48">
            <h2 className="mb-3 ml-36 text-xl font-semibold">
              No Results Found
            </h2>
            <p>Your selected filters do not match any products on this page.</p>
            <button
              className="ml-44 mt-5 border px-4 py-2 hover:border-black active:scale-95"
              onClick={removeAllFilters}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          plants?.map((plant) => (
            <li key={plant.id}>
              <ListItem plant={plant} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default List;
