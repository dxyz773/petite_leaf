import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

import Loading from "../../ui/Loading";
import Btn from "../../ui/Btn";
import Icon from "../../ui/Icon";
// import Pagination from "../../ui/Pagination";
import Recommendations from "./Recommendations";

import { filterSVGPaths } from "../../utils/helperData";
import { useProduct } from "./useProduct";
import { useCare } from "../../hooks/useCare";
import { useWater } from "../../hooks/useWater";
import { useLight } from "../../hooks/useLight";
import { usePetFriendly } from "../../hooks/usePetFriendly";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

import Error from "../../pages/Error";

import { useAddFavorite } from "../users/useAddFavorite";
import { useFavorites } from "../users/useFavorites";
import { FormControlLabel } from "@mui/material";
import { useRemoveFavorite } from "../users/useRemoveFavorite";
import { useUser } from "../users/useUser";
import { useCart } from "../cart/CartContext";

function Product() {
  const { care, isLoading: careLoading } = useCare();
  const { light, isLoading: lightLoading } = useLight();
  const { water, isLoading: waterLoading } = useWater();
  const { pet_friendly, isLoading: petFriendlyLoading } = usePetFriendly();

  const { plant, isLoading } = useProduct();
  const { user } = useUser();

  const [activeImg, setActiveImg] = useState("");

  const { favorites } = useFavorites();
  const { addFavorite, isAdding } = useAddFavorite();
  const { removeFavorite, isDeleting } = useRemoveFavorite();

  const { addCartItem, showDrawer } = useCart();

  if (isLoading) return <Loading />;

  if (!plant.length) return <Error />;

  const [
    {
      id,
      main_name,
      botanical_name,
      hover_img,
      img_3,
      img_4,
      img_5,
      main_img,
      description,
      base_price,
      alternate_names,
      pet_friendly_id,
      light_id,
      care_id,
      water_id,
      bestseller,
      stock_amount,
    },
  ] = plant;

  const [plantObj] = plant;
  const favorite = JSON.stringify(plantObj);

  const isFavorited =
    favorites
      ?.map((fave) => JSON.parse(fave.favorite))
      .some((fave) => fave.id === id) || null;

  const imgs = [main_img, hover_img, img_3, img_4, img_5];

  function handleClick() {
    if (!user) {
      toast("Login to add plant to favorites", {
        style: {
          border: "1px solid #d4d4d4",
        },
      });
      return;
    }
    if (isFavorited) {
      const curr_id = favorites
        ?.map((fave) => {
          return { ...fave, favorite: JSON.parse(fave.favorite) };
        })
        .find((fave) => fave?.favorite.id === id)["id"];

      removeFavorite(curr_id);
    } else if (!isFavorited) addFavorite(favorite);
  }

  return (
    <div className="ml-auto mr-auto min-h-dvh w-11/12 pb-36 pt-9 font-serif tracking-wide">
      {/* Bread Crumbs */}
      <div className="breadcrumbs mb-2 text-sm">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">All Plants</Link>
          </li>
        </ul>
      </div>
      {/* Main Product Content  */}
      <main className="flex flex-col gap-6 pb-8 lg:flex-row lg:items-start lg:gap-4">
        <div className="hidden lg:flex lg:flex-col lg:gap-3">
          {imgs.map((curr) => (
            <img
              key={curr}
              src={curr}
              alt="plant image"
              className="md:hover:opacity-80 lg:w-32"
              onClick={(e) => setActiveImg(e.target.src)}
            />
          ))}
        </div>

        <div>
          <img
            src={activeImg || main_img}
            className="hidden w-[60rem] lg:inline-block lg:w-[44rem]"
          />
        </div>
        <div className="lg:hidden">
          <swiper-container
            style={{
              "--swiper-navigation-color": "#a3a3a3",
              "--swiper-pagination-color": "#22c55e",
            }}
            pagination-clickable="true"
            scrollbar-clickable="true"
            pagination="true"
            navigation="true"
          >
            {imgs.map((curr, i) => (
              <swiper-slide lazy={true} key={curr}>
                <img loading="lazy" src={curr} alt={`${main_name} ${i + 1}`} />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
        {/* IMAGE PAGINATION */}
        {/* <Pagination
          arr={imgs}
          style="lg:hidden border-lime-900/85"
          action={setActiveImg}
        /> */}

        <div className="flex flex-col lg:w-[35rem]">
          <h1
            className="text-xl font-normal lg:text-lg min-[1100px]:text-xl
           min-[1200px]:text-2xl xl:pt-8 xl:text-2xl"
          >
            {main_name}
          </h1>
          <div className="mb-5 mt-3 flex justify-between lg:mt-4 min-[1200px]:mt-6">
            <p className="text-base min-[1200px]:text-lg">{`$${base_price}.00`}</p>
            {bestseller && (
              <span className="flex w-24 items-center justify-center bg-lime-300  px-3 py-1 text-[11px] uppercase tracking-widest drop-shadow-sm">
                Bestseller
              </span>
            )}
          </div>
          <div className="mb-2 self-end min-[1200px]:pb-6">
            <FormControlLabel
              control={
                <Checkbox
                  onClick={handleClick}
                  checked={isFavorited ? true : false}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite color="success" />}
                />
              }
            />
          </div>
          {/* Add To Cart Button  */}
          <Btn
            type={stock_amount ? "product" : "product_soldout"}
            disabled={stock_amount || isAdding || isDeleting ? false : true}
            onClick={
              stock_amount
                ? () => {
                    addCartItem({ ...plantObj, quantity: 1 });
                    showDrawer();
                  }
                : null
            }
          >
            {stock_amount ? "Add To cart" : "Out of stock"}
          </Btn>
          {/* Product Care Icons  */}
          <div
            className="mt-8  flex justify-center gap-5 pb-5 pt-4 md:mt-5 md:pb-2 md:pt-2 min-[1100px]:pb-6 min-[1100px]:pt-5 min-[1200px]:mt-4 xl:mt-6"
            style={{
              borderBottom: "solid 1px #0a0a0a",

              borderTop: "solid 1px #0a0a0a",
            }}
          >
            <div className="flex flex-col items-center gap-2 md:gap-1">
              <Icon
                iconType="phosphor"
                draw={filterSVGPaths["light"]?.[light_id].path}
                width="50px"
                height="50px"
                className="fill-lime-600 sm:w-[50px] lg:w-[35px] min-[1100px]:w-[40px] min-[1200px]:w-[45px]"
              />
              <span className="text-sm">
                {lightLoading
                  ? "Loading..."
                  : light
                      ?.find((curr) => curr.id === light_id)
                      ?.level.slice(0, 1)
                      ?.toUpperCase() +
                    light?.find((curr) => curr.id === light_id)?.level.slice(1)}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-1">
              <Icon
                iconType="phosphor"
                draw={filterSVGPaths["water"]?.[water_id].path}
                width="50px"
                height="50px"
                className="fill-blue-600 sm:w-[50px] lg:w-[35px] min-[1100px]:w-[40px] min-[1200px]:w-[45px]"
              />

              <span className="text-sm">
                {waterLoading
                  ? "Loading..."
                  : water
                      ?.find((curr) => curr.id === water_id)
                      .level.slice(0, 1)
                      .toUpperCase() +
                    water?.find((curr) => curr.id === water_id)?.level.slice(1)}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-1">
              <Icon
                iconType="phosphor"
                draw={filterSVGPaths["care"]?.[care_id].path}
                width="50px"
                height="50px"
                className="fill-lime-600 sm:w-[50px] lg:w-[35px] min-[1100px]:w-[40px] min-[1200px]:w-[45px]"
              />
              <span className="text-sm">
                {careLoading
                  ? "Loading..."
                  : care
                      ?.find((curr) => curr.id === care_id)
                      ?.level.slice(0, 1)
                      .toUpperCase() +
                    care?.find((curr) => curr.id === care_id)?.level.slice(1)}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-1">
              <Icon
                iconType="phosphor"
                draw={filterSVGPaths["pet_friendly"]?.[pet_friendly_id].path}
                width="50px"
                height="50px"
                className="fill-lime-600 sm:w-[50px] lg:w-[35px] min-[1100px]:w-[40px] min-[1200px]:w-[45px]"
              />
              <span className="text-sm">
                {petFriendlyLoading
                  ? "Loading..."
                  : pet_friendly
                      ?.find((curr) => curr.id === pet_friendly_id)
                      ?.description.slice(0, 1)
                      .toUpperCase() +
                    pet_friendly
                      ?.find((curr) => curr.id === pet_friendly_id)
                      ?.description.slice(1)}
              </span>
            </div>
          </div>
          {/* Product Description Details */}{" "}
          <div className="mt-4 space-y-2 text-sm lg:mt-4 min-[1200px]:mt-6 min-[1200px]:text-[15px] xl:space-y-4 xl:pt-5">
            <p>
              <span style={{ fontWeight: 500 }}>Botanical Name: </span>
              {botanical_name}
            </p>
            <p>
              <span style={{ fontWeight: 500 }}>Alternate Name(s): </span>
              {alternate_names}
            </p>
            <p>
              <span style={{ fontWeight: 500 }}>Description: </span>
              {description}
            </p>
          </div>
        </div>
      </main>
      <Recommendations />
    </div>
  );
}

export default Product;
