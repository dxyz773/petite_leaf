import Btn from "../../ui/Btn";

function CollectionCover({ title, side, url }) {
  if (side === "left") {
    return (
      <div className="flex h-[30rem] flex-col shadow-lg lg:flex-row">
        <div className="flex items-center justify-center  bg-[#fff] lg:w-1/3 ">
          <div className="mt-4 flex w-full flex-col items-center gap-6">
            <h2 className=" ml-2 font-serif text-4xl md:text-center md:text-5xl">
              {title}
            </h2>
            <Btn
              type="collection_cover"
              to={`/collections/${title.toLowerCase().replaceAll(" ", "-")}`}
            >
              Explore
            </Btn>
          </div>
        </div>
        <div className="lg:w-2/3">
          <div
            className="hero h-[30rem] bg-cover opacity-90"
            style={{
              backgroundImage: `url('./${url}')`,
            }}
          ></div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-[30rem] flex-col shadow-lg lg:flex-row">
      <div className="lg:w-2/3">
        <div
          className="hero min-h-[30rem] bg-cover opacity-90"
          style={{
            backgroundImage: `url('./${url}')`,
          }}
        ></div>
      </div>
      <div className="flex items-center justify-center bg-[#fff] lg:w-1/3">
        <div className="mt-4 flex w-full flex-col items-center gap-6">
          <h2 className="pl-2 font-serif text-4xl md:text-center md:text-5xl">
            {title}
          </h2>
          <Btn
            type="collection_cover"
            to={`/collections/${title.toLowerCase().replaceAll(" ", "-")}`}
          >
            Shop
          </Btn>
        </div>
      </div>
    </div>
  );
}

export default CollectionCover;
