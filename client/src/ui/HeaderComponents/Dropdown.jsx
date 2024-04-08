import { useSelector, useDispatch } from "react-redux";
import { closeDropDown } from "./dropDownSlice";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useRandomProducts } from "../../features/products/useRandomProducts";
import { getAllUIData } from "../../services/plantsAPI";
import { usePlantSearch } from "../../context/SearchContext";

function DropDown() {
  const dispatch = useDispatch();
  const { randomProducts, isLoading } = useRandomProducts();

  const active = useSelector((state) => state.dropDown.isActive);
  const activeContent = useSelector((state) => state.dropDown.activeContent);

  const { data: ui_data, isLoading: ui_dataLoading } = useQuery({
    queryKey: ["ui_data"],
    queryFn: getAllUIData,
  });

  const { hideSearch } = usePlantSearch();
  // console.log(ui_data);
  if (!hideSearch) return;
  if (active && activeContent === 1) {
    return (
      <div
        className={
          active && activeContent === 1
            ? "absolute z-20 h-[24rem] w-full border-b bg-neutral-100"
            : "hidden"
        }
        onMouseLeave={() => dispatch(closeDropDown())}
      >
        <div className="mt-14 flex justify-center">
          <div className="grid grid-cols-2 gap-36 xl:gap-52">
            <nav className="ml-4 mt-3 xl:ml-0">
              <h2 className="mb-3 font-serif font-bold uppercase tracking-wide underline-offset-2">
                Shop
              </h2>
              <ul className="mb-9 space-y-4">
                <li>
                  <Link
                    className="font-serif tracking-wide hover:underline hover:underline-offset-8"
                    to="/products"
                    onClick={() => dispatch(closeDropDown())}
                  >
                    All Plants
                  </Link>
                </li>
              </ul>
              <h2 className="mb-3 font-serif font-bold uppercase underline-offset-2">
                Collections
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="font-serif tracking-wide hover:underline hover:underline-offset-8"
                    to="/collections"
                    onClick={() => dispatch(closeDropDown())}
                  >
                    All Plant Collections
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-serif tracking-wide hover:underline hover:underline-offset-8"
                    to="/collections/the-pothos-collection"
                    onClick={() => dispatch(closeDropDown())}
                  >
                    The Pothos Collection
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-serif tracking-wide hover:underline hover:underline-offset-8"
                    to="/collections/the-philodendron-collection"
                    onClick={() => dispatch(closeDropDown())}
                  >
                    The Philodendron Collection
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-serif tracking-wide hover:underline hover:underline-offset-8"
                    to="/collections/bestsellers-collection"
                    onClick={() => dispatch(closeDropDown())}
                  >
                    Bestsellers Collection
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="mr-4 grid grid-cols-2 gap-4 xl:mr-0">
              {isLoading
                ? "Loading..."
                : randomProducts?.map((plant) => (
                    <Link
                      key={plant?.id}
                      className="hover:underline hover:underline-offset-8"
                      to={`/products/${plant?.main_name}`
                        .toLowerCase()
                        .replaceAll(" ", "-")}
                      onClick={() => dispatch(closeDropDown())}
                    >
                      <img
                        className="h-[125px] w-[125px] shadow-md"
                        src={plant?.main_img}
                        alt={plant?.main_name}
                      />
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (active && activeContent === 3) {
    return (
      <div
        className={
          active && activeContent === 3
            ? "absolute z-20 h-[24rem] w-full border-b bg-neutral-100"
            : "hidden"
        }
        onMouseLeave={() => dispatch(closeDropDown())}
      >
        <div className="mt-4 flex lg:justify-center">
          <div className="grid grid-cols-2 gap-1 xl:gap-8">
            {/* 32 */}
            <nav className="ml-12 mt-10 lg:ml-24 xl:ml-24">
              <h2 className="mb-3 font-serif font-bold uppercase tracking-wide underline-offset-2">
                Learn & Explore
              </h2>
              <ul className="mb-9 space-y-4">
                <li>
                  <Link
                    className="font-serif tracking-wide hover:underline hover:underline-offset-8"
                    to="/blog"
                    onClick={() => dispatch(closeDropDown())}
                  >
                    The Botanical Journal
                  </Link>
                </li>
              </ul>
              <h2 className="mb-3 font-serif font-bold uppercase underline-offset-2">
                Trending Articles
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="font-serif tracking-wide hover:underline hover:underline-offset-8"
                    to="/blog/a-guide-for-pet-parents:-choosing-pet-friendly-plants"
                    onClick={() => dispatch(closeDropDown())}
                  >
                    A Guide For Pet Parents: Choosing Pet Friendly Plants
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-serif tracking-wide hover:underline hover:underline-offset-8"
                    to="/blog/embrace-the-jungalow-lifestyle:-bringing-the-jungle-indoors"
                    onClick={() => dispatch(closeDropDown())}
                  >
                    Embrace the Jungalow Lifestyle: Bringing the Jungle Indoors
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-serif tracking-wide hover:underline hover:underline-offset-8"
                    to="/blog/green-beginnings:-a-beginner's-guide-to-caring-for-your-first-houseplant"
                    onClick={() => dispatch(closeDropDown())}
                  >
                    A Beginner&apos;s Guide to Care For Your First Houseplant
                  </Link>
                </li>
              </ul>
            </nav>
            <div>
              {ui_dataLoading ? (
                <p>&quot;Loading...&quot;</p>
              ) : (
                <img
                  src={ui_data?.find((curr) => curr.id === 2).img_1}
                  alt="Array of plants"
                  className="ml-12 mt-12 h-60 shadow-md lg:mt-5 lg:h-72 xl:h-[19rem]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={
        active && activeContent === 2
          ? "absolute z-20 h-[24rem] w-full border-b  bg-neutral-100"
          : "hidden"
      }
      onMouseLeave={() => dispatch(closeDropDown())}
    >
      <div className="mt-8 flex lg:justify-center">
        <div className="grid grid-cols-2 min-[900px]:ml-16 lg:ml-0 xl:mr-20">
          {/* 32 */}
          <nav className="lg:ml-22 ml-24 mr-8 mt-12 ">
            <h2 className="mb-3 font-serif font-bold uppercase tracking-wide underline-offset-2">
              About us
            </h2>
            <ul className="mb-9 space-y-4">
              <li>
                <Link
                  className="font-serif tracking-wide hover:underline hover:underline-offset-8"
                  to="/our-story"
                  onClick={() => dispatch(closeDropDown())}
                >
                  Our Story
                </Link>
              </li>
            </ul>
            <h2 className="mb-3 font-serif font-bold uppercase underline-offset-2">
              Our Mission
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  className="font-serif tracking-wide hover:underline hover:underline-offset-8"
                  to="/leaf-mental-wellness"
                  onClick={() => dispatch(closeDropDown())}
                >
                  Leaf + Mental Wellness
                </Link>
              </li>
            </ul>
          </nav>
          <div className="grid h-[300px] grid-rows-2">
            {ui_dataLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                <img
                  src={ui_data?.find((curr) => curr.id === 1).img_1}
                  alt="succulent garden"
                  className="w-[350px] shadow-md lg:w-[480px]"
                />
                <img
                  src={ui_data?.find((curr) => curr.id === 1).img_2}
                  alt="potted plants on wooden floor"
                  className="w-[350px] shadow-md lg:w-[480px] "
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
