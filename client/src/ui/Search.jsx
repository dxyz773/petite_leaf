import { usePlantSearch } from "../context/SearchContext";
import { useEffect, useRef } from "react";
import Icon from "./Icon";
import Btn from "./Btn";
import { SVGDrawPaths } from "../utils/helperData";
import SearchResultsContainer from "./SearchResultsContainer";

function Search() {
  const {
    search,
    handleSearchChange,
    hideSearch,
    closeSearch,
    searchPlantResults,
  } = usePlantSearch();

  const containerRef = useRef(null);

  useEffect(
    function () {
      const handleClickOutside = function (e) {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          closeSearch();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    },
    [closeSearch],
  );

  return (
    <div
      className={`absolute z-10 flex h-full w-full border-t-black bg-stone-700/85 py-4 ${
        hideSearch ? "hidden" : "flex flex-col"
      }`}
    >
      <div
        className="ml-auto mr-auto w-[485px] md:w-[617px]"
        ref={containerRef}
      >
        <div className=" flex items-center border bg-[#fff] px-3 py-2">
          <Icon
            draw={SVGDrawPaths.mini_search}
            className="h-[1.15rem] w-[1.15rem]"
          />

          <input
            type="text"
            placeholder={` Search`}
            value={search}
            onChange={handleSearchChange}
            className={`w-[30rem] px-2 py-3 text-sm sm:w-[35rem]`}
          />
          <Btn type="close" onClick={closeSearch}>
            x
          </Btn>
        </div>
        {searchPlantResults?.length ? (
          <SearchResultsContainer
            searchPlantResults={searchPlantResults}
            closeSearch={closeSearch}
            search={search}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Search;
