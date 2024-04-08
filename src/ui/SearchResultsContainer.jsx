import SearchResult from "./SearchResult";

function SearchResultsContainer({ searchPlantResults, closeSearch, search }) {
  return (
    <div className="ml-auto mr-auto flex w-[485px] flex-col gap-5 bg-[#fff] p-3 md:w-[617px]">
      <header className="flex gap-1 align-middle">
        <span className="text-sm text-gray-500">
          {searchPlantResults?.length}
        </span>
        <h2 className="text-sm text-gray-500 underline underline-offset-4">
          {`results for '${search}'`}
        </h2>
      </header>
      <main className="flex">
        <div className="w-[473px] md:w-[617px]">
          <h4 className="mb-2 h-6 text-sm text-gray-500 underline underline-offset-4">
            Products
          </h4>
          <div className="h-[355px] overflow-y-auto">
            {searchPlantResults?.map((plant) => (
              <SearchResult
                key={plant.id}
                plant={plant}
                closeSearch={closeSearch}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default SearchResultsContainer;
