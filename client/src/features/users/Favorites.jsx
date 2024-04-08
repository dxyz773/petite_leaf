import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import { useFavorites } from "./useFavorites";
import { useRemoveFavorite } from "./useRemoveFavorite";
import { useCart } from "../cart/CartContext";

function Favorites() {
  const { favorites, isLoading: favoritesLoading } = useFavorites();
  const { addCartItem, showDrawer } = useCart();
  const { removeFavorite, isDeleting } = useRemoveFavorite();
  const navigate = useNavigate();

  const parsedFavorites = favorites?.map((fave) => JSON.parse(fave.favorite));

  return (
    <div className="flex w-full flex-col gap-8 font-serif tracking-wide ">
      <div
        className="flex justify-between align-middle"
        style={{ paddingBottom: "10px", borderBottom: "solid 1px #d4d4d4" }}
      >
        <h1 className="text-xl">Favorite Plants</h1>
      </div>
      <div className="flex shrink-0 flex-wrap gap-6">
        {favorites?.length ? (
          favoritesLoading ? (
            <p>Loading...</p>
          ) : (
            parsedFavorites?.map((favorite) => (
              <div key={favorite.id} className="shrink-0">
                <CardMedia
                  component="img"
                  alt={favorite.main_name}
                  sx={{ height: "220px", width: "220px", cursor: "pointer" }}
                  image={favorite.main_img}
                  onClick={() =>
                    navigate(
                      `/products/${favorite.main_name}`
                        .toLowerCase()
                        .replaceAll(" ", "-"),
                    )
                  }
                />
                <Card sx={{ width: 220, borderRadius: "2px" }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="p"
                      sx={{
                        fontSize: "15px",
                        "&:hover": { textDecoration: "underline" },
                        cursor: "pointer",
                      }}
                      component="div"
                      onClick={() =>
                        navigate(
                          `/products/${favorite.main_name}`
                            .toLowerCase()
                            .replaceAll(" ", "-"),
                        )
                      }
                    >
                      {favorite.main_name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {`S${favorite.base_price}.00`}
                    </Typography>
                  </CardContent>

                  <CardActions
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "5px",
                    }}
                  >
                    <button
                      className="btn btn-sm mt-7 rounded-sm bg-neutral-950 text-xs font-normal  text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
                      disabled={isDeleting}
                      onClick={() => {
                        addCartItem({ ...favorite, quantity: 1 });
                        showDrawer();
                      }}
                    >
                      Add To Cart
                    </button>

                    <button
                      disabled={isDeleting}
                      className="self-end text-xs underline"
                      onClick={() => {
                        const curr_id = favorites
                          ?.map((fave) => {
                            return {
                              ...fave,
                              favorite: JSON.parse(fave.favorite),
                            };
                          })
                          .find((fave) => fave?.favorite.id === favorite.id)[
                          "id"
                        ];
                        removeFavorite(curr_id);
                      }}
                    >
                      remove
                    </button>
                  </CardActions>
                </Card>
              </div>
            ))
          )
        ) : (
          <ul className="flex flex-col text-sm">
            <p className="text-neutral-500">
              You do not have any favorites yet.
            </p>
            <button
              className="btn btn-sm mt-7 w-[200px] rounded-sm bg-neutral-950 text-xs font-normal  text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
              onClick={() => navigate("/products")}
            >
              Shop
            </button>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Favorites;
