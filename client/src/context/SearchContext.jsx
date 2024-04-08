import { createContext, useContext, useEffect, useState } from "react";
import { useProducts } from "../features/products/useProducts";

const SearchContext = createContext();

function SearchContextProvider({ children }) {
  const { plants } = useProducts();
  const [search, setSearch] = useState("");
  const [hideSearch, setHideSearch] = useState(true);

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }
  function openSearch() {
    setHideSearch(false);
  }
  function closeSearch() {
    setHideSearch(true);
    setSearch("");
  }
  let searchPlantResults =
    plants && search.length
      ? plants?.filter(
          (plant) =>
            plant?.main_name?.toLowerCase().includes(search.toLowerCase()) ||
            plant?.alternate_names
              ?.toLowerCase()
              .includes(search.toLowerCase()) ||
            plant?.botanical_name
              ?.toLowerCase()
              .replaceAll('"', "")
              .includes(search.toLowerCase()),
        )
      : 0;

  useEffect(
    function () {
      const escapeSearch = function (e) {
        if (e.key === "Escape" && !hideSearch) {
          closeSearch();
        }
      };

      document.addEventListener("keyup", (e) => escapeSearch(e));
      return document.removeEventListener("keyup", (e) => escapeSearch(e));
    },
    [hideSearch],
  );

  return (
    <SearchContext.Provider
      value={{
        search,
        handleSearchChange,
        openSearch,
        hideSearch,
        closeSearch,
        searchPlantResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function usePlantSearch() {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error("SearchContext was used outside of SearchContextProvider");
  return context;
}

export { SearchContextProvider, usePlantSearch };
