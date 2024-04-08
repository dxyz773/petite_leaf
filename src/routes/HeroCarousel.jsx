import { Carousel } from "antd";
import { useHero } from "../hooks/useHero";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Loading from "../ui/Loading";

function HeroCarousel() {
  const { hero, isLoading } = useHero();

  const navigate = useNavigate();
  if (isLoading) return <Loading />;

  const heroArr = hero;
  const one = heroArr?.find((curr) => curr.id === 1);
  const two = heroArr?.find((curr) => curr.id === 2);
  const three = heroArr?.find((curr) => curr.id === 3);
  const four = heroArr?.find((curr) => curr.id === 4);

  return (
    <Carousel autoplay>
      <div>
        <div
          className={`hero min-h-screen opacity-90`}
          style={{
            backgroundImage: "url('./bart-zimny-monstera-unsplash.jpg')",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1
                className={`mb-5 font-serif text-5xl font-bold ${
                  one?.title === "A new plant adventure awaits!"
                    ? "text-neutral-950/90"
                    : "text-lime-50"
                }`}
              >
                {one?.title}
              </h1>
              <p className="mb-8 font-serif tracking-wide text-neutral-50">
                {one?.text}
              </p>
              <Button
                variant="contained"
                color={one?.title === "Enchanted" ? "secondary" : "success"}
                onClick={() =>
                  navigate(
                    `${
                      one?.title === "Botanical Collections"
                        ? "/collections"
                        : "/products"
                    }`,
                  )
                }
                className="btn btn-primary font-serif"
              >
                {one?.["btn_text"]}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`hero min-h-screen opacity-90`}
          style={{
            backgroundImage: "url('./scott-webb-GXOGGENgHnQ-unsplash.jpg')",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1
                className={`mb-5 font-serif text-5xl font-bold ${
                  two?.title === "A new plant adventure awaits!"
                    ? "text-neutral-950/90"
                    : "text-lime-50"
                }`}
              >
                {two?.title}
              </h1>
              <p className="mb-8 font-serif tracking-wide text-neutral-50">
                {two?.text}
              </p>
              <Button
                variant="contained"
                color={two?.title === "Enchanted" ? "secondary" : "success"}
                onClick={() =>
                  navigate(
                    `${
                      two?.title === "Botanical Collections"
                        ? "/collections"
                        : "/products"
                    }`,
                  )
                }
                className="btn btn-primary font-serif"
              >
                {two?.["btn_text"]}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`hero min-h-screen opacity-90`}
          style={{
            backgroundImage: "url('./feey-VdG-VlofG2Q-unsplash.jpg')",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1
                className={`mb-5 font-serif text-5xl font-bold ${
                  three?.title === "A new plant adventure awaits!"
                    ? "text-neutral-950/90"
                    : "text-lime-50"
                }`}
              >
                {three?.title}
              </h1>
              <p className="mb-8 font-serif tracking-wide text-neutral-50">
                {three?.text}
              </p>
              <Button
                variant="contained"
                color={three?.title === "Enchanted" ? "secondary" : "success"}
                onClick={() =>
                  navigate(
                    `${
                      three?.title === "Botanical Collections"
                        ? "/collections"
                        : "/products"
                    }`,
                  )
                }
                className="btn btn-primary font-serif"
              >
                {three?.["btn_text"]}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`hero min-h-screen opacity-90`}
          style={{
            backgroundImage:
              "url('./pawel-czerwinski-qzaIDFtzcZ0-unsplash.jpg')",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1
                className={`mb-5 font-serif text-5xl font-bold ${
                  four?.title === "A new plant adventure awaits!"
                    ? "text-neutral-950/90"
                    : "text-lime-50"
                }`}
              >
                {four?.title}
              </h1>
              <p className="mb-8 font-serif tracking-wide text-neutral-50">
                {four?.text}
              </p>
              <Button
                variant="contained"
                color={four?.title === "Enchanted" ? "secondary" : "success"}
                onClick={() =>
                  navigate(
                    `${
                      four?.title === "Botanical Collections"
                        ? "/collections"
                        : "/products"
                    }`,
                  )
                }
                className="btn btn-primary font-serif"
              >
                {four?.["btn_text"]}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default HeroCarousel;
