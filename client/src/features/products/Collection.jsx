import { Link, useParams } from "react-router-dom";
import { useProducts } from "./useProducts";
import PageHeader from "../../ui/PageHeader";
import Error from "../../pages/Error";
import { collectionData } from "../../utils/helperData";

function Collection() {
  const { name } = useParams();
  const { plants, isLoading } = useProducts();

  const collection_main_img = {
    bestsellers: "ceyda-ciftci-dDVU6D_6T80-unsplash.jpg",
    pothos: "taylor-heery-Q0geXolSohI-unsplash.jpg",
    philodendron: "jungle-space-NLQNdS-kVi8-unsplash.jpg",
  };
  const collection_key = name.slice(0, -11).split("-").at(-1);
  const collection_list = plants?.filter((curr) =>
    curr.main_name.toLowerCase().includes(collection_key),
  );

  const isBestseller = collection_key.includes("bestseller");
  const bestseller_collection_list = plants?.filter((curr) => curr.bestseller);

  const img = collection_main_img?.[collection_key];

  const formattedTitle = name
    ?.split("-")
    ?.map((curr) => curr[0]?.toUpperCase() + curr.slice(1))
    .join(" ");

  console.log(isBestseller);
  console.log(bestseller_collection_list);

  if (!collectionData?.[collection_key]) {
    return <Error />;
  }
  if (isBestseller) {
    return (
      <>
        <PageHeader
          src={`../${img}`}
          title={formattedTitle}
          className="mb-[1rem] rounded-sm bg-neutral-950/10 px-6 py-2 font-serif text-6xl font-semibold text-neutral-50"
        />
        <div className="ml-auto mr-auto min-h-dvh w-11/12 px-5 pb-72 pt-32 lg:pl-20 lg:pr-20">
          {/* Bread Crumbs */}
          <div className="breadcrumbs mb-2 text-sm">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/collections">Plant Collections</Link>
              </li>
            </ul>
          </div>
          {/* Main Product Content  */}
          <div className="flex flex-col gap-16 pt-5 lg:flex-row">
            <div className="w-full font-serif lg:w-[42rem] ">
              <h1
                className="pb-8 text-5xl font-semibold"
                style={{ borderBottom: "solid 1px black" }}
              >{`${
                collection_key.charAt(0).toUpperCase() + collection_key.slice(1)
              }`}</h1>

              {collectionData?.[collection_key]?.paragraph.map((curr) => (
                <p key={curr} className="mt-7 text-xl leading-8">
                  {curr}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-8 align-middle">
              {bestseller_collection_list?.map((plant) => (
                <Link
                  key={plant.main_img}
                  to={`/products/${plant.main_name}`
                    .toLowerCase()
                    .replaceAll(" ", "-")}
                >
                  <img
                    src={plant.main_img}
                    alt={plant.main_name}
                    className="w-full shadow-md transition-all duration-300 hover:scale-[.99] lg:w-[400px]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader
        src={`../${img}`}
        title={formattedTitle}
        className="mb-[1rem] rounded-sm bg-neutral-950/10 px-6 py-2 font-serif text-6xl font-semibold text-neutral-50"
      />
      <div className="ml-auto mr-auto min-h-dvh w-11/12 px-5 pb-72 pt-32 lg:pl-20 lg:pr-20">
        {/* Bread Crumbs */}
        <div className="breadcrumbs mb-2 text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/collections">Plant Collections</Link>
            </li>
          </ul>
        </div>
        {/* Main Product Content  */}
        <div className="flex flex-col gap-16 pt-5 lg:flex-row">
          <div className="w-full font-serif lg:w-[42rem] ">
            <h1
              className="pb-8 text-5xl font-semibold"
              style={{ borderBottom: "solid 1px black" }}
            >{`${
              collection_key.charAt(0).toUpperCase() + collection_key.slice(1)
            }`}</h1>

            {collectionData?.[collection_key]?.paragraph.map((curr) => (
              <p key={curr} className="mt-7 text-xl leading-8">
                {curr}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-8 align-middle">
            {collection_list?.map((plant) => (
              <Link
                key={plant.main_img}
                to={`/products/${plant.main_name}`
                  .toLowerCase()
                  .replaceAll(" ", "-")}
              >
                <img
                  src={plant.main_img}
                  alt={plant.main_name}
                  className="w-full shadow-md transition-all duration-300 hover:scale-[.99] lg:w-[500px]"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
