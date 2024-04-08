import { useSearchParams } from "react-router-dom";
import List from "../../ui/List";
import PageHeader from "../../ui/PageHeader";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSortChange(e) {
    e.preventDefault();
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <div>
      <PageHeader
        page="products"
        src="alyani-yang-WajET_vzPmI-unsplash.jpg"
        title="All Plants"
        className={
          "mb-36 mr-[28rem] font-serif text-6xl font-bold text-lime-100 "
        }
      />
      <div className="ml-auto mr-auto min-h-dvh w-11/12 pb-72 pt-16">
        <div className="flex flex-col items-center gap-5 pb-8 sm:pb-16 md:pb-20">
          <header className="pt-10 font-serif text-2xl font-bold capitalize ">
            Shop House Plants
          </header>
          <p className="pl-r font-lg my-2 font-serif text-lg leading-8 tracking-wide md:mt-6 md:text-xl md:leading-9 lg:ml-40 lg:mr-40">
            Welcome to the ultimate botanical paradise! Prepare to be captivated
            by our exquisite selection of luxury plants, meticulously curated to
            elevate your space with unrivaled elegance and opulence. Whether
            you&apos;re a seasoned plant enthusiast or just beginning your
            journey into the world of lush greenery, let us be your gateway to a
            world of botanical beauty. Let the exploration begin.
          </p>
        </div>
        <div className="invisible text-end lg:visible ">
          <select
            className="select select-warning max-w-xs border-lime-400"
            name="sort"
            onChange={handleSortChange}
          >
            <option value="featured">Featured</option>
            <option value="main_name-asc">Alphabetically, A-Z</option>
            <option value="main_name-desc">Alphabetically, Z-A</option>
            <option value="base_price-asc">$ Low to High</option>
            <option value="base_price-desc">$ High to Low</option>
          </select>
        </div>
        <List />
      </div>
    </div>
  );
}

export default Products;
