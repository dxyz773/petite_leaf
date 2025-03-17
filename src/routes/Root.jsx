import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import FeaturedPhoto from "../ui/FeaturedPhoto";
import Recommendations from "../features/products/Recommendations";
import HeroCarousel from "./HeroCarousel";
import PlantVideo from "./PlantVideo";

function Root() {
  const navigate = useNavigate();

  return (
    <main className="font-serif">
      <HeroCarousel />

      <div className="my-44 ml-auto mr-auto w-9/12 text-xl tracking-wide">
        <p className="leading-8">
          At <span className="text-2xl font-bold">Petite Leaf</span>, we believe
          in the transformative power of
          <span className="font-semibold"> nature to nurture</span> mental
          wellness and elevate everyday living. Our mission is to curate a
          collection of luxurious botanicals that not only beautify spaces but
          also promote mindfulness, serenity, and emotional balance. Through our
          commitment to exceptional quality and holistic well-being, we aim to
          inspire moments of tranquility and connection with nature, fostering a
          sanctuary for the
          <span className="font-semibold"> mind, body, and soul</span>.
        </p>
      </div>
      {/* ---------------------------------------------------------- */}
      {/* ---------------------------------------------------------- */}
      {/* ---------------------------------------------------------- */}
      <div
        className="flex min-h-screen flex-col opacity-90 lg:grid lg:grid-cols-3"
        style={{
          borderBottom: "solid 1px #0a0a0a",

          borderTop: "solid 1px #0a0a0a",
        }}
      >
        <FeaturedPhoto
          url="alyani-yang-WajET_vzPmI-unsplash.jpg"
          divStyle="col-span-2 h-[20rem] w-full bg-cover px-8 pt-8 lg:h-full"
          titleStyle="mb-5 font-serif text-5xl font-bold text-lime-50"
          title="Plant Shop"
          btnColor="success"
          btnStyle={{ fontFamily: "serif", letterSpacing: "1.6px" }}
          btnText="Shop All Plants"
          navPath="products"
        />

        {/* ---------------------------------------------------------- */}

        <FeaturedPhoto
          url="jungle-space-BeOI4eQdFCw-unsplash.jpg"
          divStyle="h-[20rem] w-full bg-cover lg:h-full flex flex-col items-end"
          titleStyle="mb-5 mr-4 pt-6 font-serif text-4xl font-bold text-lime-50"
          title="Collections"
          btnColor="secondary"
          btnStyle={{
            marginRight: "1.5rem",
            fontFamily: "serif",
            letterSpacing: "1.6px",
          }}
          btnText="Shop Collections"
          navPath="collections"
        />
        {/* ---------------------------------------------------------- */}

        <FeaturedPhoto
          url="jungle-space-rrO6fTQI-Q0-unsplash.jpg"
          divStyle="h-[20rem] w-full bg-cover lg:h-full flex flex-col items-center justify-center"
          titleStyle="mb-5 mr-4 font-serif text-3xl font-bold text-lime-50"
          title="The Pothos Collection"
          btnColor="success"
          btnStyle={{ fontFamily: "serif", letterSpacing: "1.6px" }}
          btnText="Shop Pothos"
          navPath="collections/the-pothos-collection"
        />
        {/* ---------------------------------------------------------- */}

        <FeaturedPhoto
          url="markus-spiske-sFydXGrt5OA-unsplash.jpg"
          divStyle="h-[20rem] w-full bg-cover lg:h-full"
          titleStyle="bg-neutral-900/20 mb-4 font-serif text-2xl font-bold text-neutral-200 pl-4 pt-4"
          title="The Botanical Journal"
          btnStyle={{
            marginLeft: "1.5rem",
            fontFamily: "serif",
            letterSpacing: "1.6px",
          }}
          btnColor="primary"
          btnText="Read Articles"
          navPath="blog"
        />
        {/* ---------------------------------------------------------- */}

        <FeaturedPhoto
          url="feey-KcjnCrBEDZ4-unsplash.jpg"
          divStyle="h-[20rem] w-full bg-cover lg:h-full"
          titleStyle="mb-5 font-serif text-2xl pl-4 pt-4 font-bold text-lime-50"
          title="The Philodendron Collection"
          btnColor="success"
          btnStyle={{
            marginLeft: "1rem",
            fontFamily: "serif",
            letterSpacing: "1.6px",
          }}
          btnText="Shop Philodendrons"
          navPath="collections/the-philodendron-collection"
        />
      </div>

      {/* ---------------------------------------------------------- */}
      <div className="my-44 ml-auto mr-auto w-9/12 text-xl">
        <blockquote className="leading-8 tracking-wide">
          &quot;Absolutely mesmerized by the elegance and vitality of the plants
          from Petite Leaf. Each leaf seems to exude a radiant glow,
          transforming my space into a lush oasis of tranquility. The quality
          and beauty of these botanicals have truly exceeded my expectations.
          Can&apos;t wait to add more to my collection!&quot; -
          <span className=" font-bold italic">Claudia M.</span>
        </blockquote>
      </div>

      <div
        style={{
          backgroundImage: `url('./vd-photography-0Zywb-aifnI-unsplash.jpg')`,
        }}
        className="h-[45rem] w-full bg-cover "
      ></div>
      <PlantVideo />
      <div
        style={{
          backgroundImage: `url('./ben-lockwood-Q_zdanVggKo-unsplash.jpg')`,
        }}
        className="h-[30rem] w-full bg-cover lg:h-[35rem] "
      ></div>

      <div>
        <Recommendations page="home" />
      </div>
      <div
        style={{
          backgroundImage: `url('./huy-phan-hzgSPQCTbQo-unsplash.jpg')`,
        }}
        className="h-[30rem] w-full bg-cover lg:h-[35rem]"
      ></div>
      <div
        className="flex flex-col lg:grid lg:grid-cols-2"
        style={{
          borderBottom: "solid 1px #0a0a0a",

          borderTop: "solid 1px #0a0a0a",
        }}
      >
        <div className="flex flex-col items-center lg:order-1">
          <h1 className="mt-10 px-4 text-center text-3xl font-[500] lg:mt-20 ">
            &quot;Knowing When It&apos;s Time: A Guide to Repotting Your
            Houseplants&quot;
          </h1>
          <p className="mb-10 mt-10 px-8 text-lg leading-8 lg:px-12">
            In the world of plant care, knowing when to repot your leafy
            companions is essential for their health and vitality. While it may
            seem like a daunting task, understanding the signs that indicate
            it&apos;s time for a new pot can ensure your plants continue to
            thrive and flourish. Join us as we explore the key indicators that
            signal when your plants are ready for a change of scenery.
          </p>
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/blog")}
            className="btn btn-primary"
            style={{
              marginBottom: "30px",
              fontFamily: "serif",
              letterSpacing: "1.6px",
            }}
          >
            Read More
          </Button>
        </div>
        <div
          style={{ backgroundImage: `url('./IMG_0806.jpg')` }}
          className="h-[30rem] w-full bg-cover lg:h-full "
        ></div>
      </div>

      <div
        style={{
          backgroundImage: `url('./annie-spratt-8mqOw4DBBSg-unsplash.jpg')`,
        }}
        className="h-[22rem] w-full bg-cover lg:h-[29rem]"
      ></div>
    </main>
  );
}

export default Root;
