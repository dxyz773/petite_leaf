import { useRandomProducts } from "./useRandomProducts";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Recommendations({ page }) {
  const { randomProducts, isLoading } = useRandomProducts();
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div
      className={page === "home" ? "pb-20  pt-10" : "mt-12  pb-8"}
      style={{
        borderBottom: "solid 1px #cecece",

        borderTop: "solid 1px #cecece",
      }}
    >
      <h2 className="px-6 pb-2 pt-7 font-serif text-[23px] font-normal">
        {page === "home" ? "Trending Plants" : "We think you will love"}
      </h2>
      <div className="flex justify-center gap-5 px-3 pb-4 pt-3 lg:gap-8">
        {randomProducts?.map((rec) => (
          <Card
            key={rec.id}
            sx={{ width: 240 }}
            style={{ borderRadius: 0, cursor: "pointer" }}
            onClick={() =>
              navigate(
                `/products/${rec.main_name}`.toLowerCase().replaceAll(" ", "-"),
              )
            }
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={rec.main_img}
                alt={rec.main_name}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ fontSize: "15px" }}
                  variant="p"
                  component="div"
                >
                  {rec.main_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`$${rec.base_price}`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
