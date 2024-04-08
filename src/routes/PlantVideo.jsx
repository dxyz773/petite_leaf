import { useNavigate } from "react-router-dom";
import video from "../assets/7013842-uhd_2160_4096_25fps.mp4";

function PlantVideo() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col pb-12">
        <h1
          className="px-5 py-5 pt-10 text-center font-serif text-5xl tracking-wide md:pb-8 md:pt-64 md:text-6xl"
          style={{ lineHeight: "65px" }}
        >
          Your Botanical Paradise
        </h1>
        <button
          className="btn w-40 justify-center self-center rounded-[4px] bg-neutral-950 font-serif text-xl font-normal uppercase tracking-wide text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
          onClick={() => navigate("/products")}
        >
          Shop
        </button>
      </div>
      <video
        className="w-full border-r shadow-md md:w-[60%]"
        autoPlay
        muted
        loop
        src={video}
      ></video>
    </div>
  );
}

export default PlantVideo;
