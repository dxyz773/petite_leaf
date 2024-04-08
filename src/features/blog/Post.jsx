import { usePost } from "./usePost";
import Loading from "../../ui/Loading";

import Recommendations from "../products/Recommendations";
import { Link } from "react-router-dom";
import Error from "../../pages/Error";

function Post() {
  const { post, isLoading } = usePost();

  if (isLoading) {
    return <Loading />;
  }

  if (!post.length) return <Error />;
  const [{ img, title, intro, text }] = post;

  return (
    <>
      <div
        className="hero min-h-[28rem] opacity-90"
        style={{
          backgroundImage: `url('${img}')`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
      </div>
      <div className="ml-auto mr-auto mt-32 min-h-dvh w-11/12 px-5 pb-72 font-serif lg:px-28 ">
        <div className="breadcrumbs mb-12 text-sm ">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">The Botanical Journal</Link>
            </li>
          </ul>
        </div>
        <h1 className="mb-20 text-center text-5xl leading-[3.5rem] lg:px-32">
          {title}
        </h1>
        <div className="mb-32 space-y-5">
          <p className="text-xl leading-8 tracking-wide">{intro}</p>
          {text?.map((paragraph) => (
            <p className="text-xl leading-8 tracking-wide" key={paragraph[0]}>
              {paragraph}
            </p>
          ))}
        </div>
        <Recommendations page="home" />
      </div>
    </>
  );
}

export default Post;
