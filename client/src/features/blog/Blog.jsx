import { Link } from "react-router-dom";
import { useBlog } from "./useBlog";
import Loading from "../../ui/Loading";
import PageHeader from "../../ui/PageHeader";
import Recommendations from "../products/Recommendations";

function Blog() {
  const { blogPosts, isLoading } = useBlog();

  return (
    <>
      <PageHeader
        src="./marko-sabolic-KD20PDB2HyA-unsplash.jpg"
        title="The Botanical Journal"
        className="mb-[6rem] ml-20 mr-[950px] bg-neutral-900/25 px-8 py-4 font-serif text-6xl text-neutral-50"
      />
      <div className="ml-auto mr-auto min-h-dvh w-11/12 px-5 pb-10 pt-32 lg:px-16 ">
        <header className="mb-12 flex justify-center pt-10 font-serif text-2xl font-bold">
          The Botanical Blog
        </header>
        <p className="my-2 mb-20 border-b border-b-neutral-400 pb-20 pl-8 pt-4 font-serif text-lg leading-8 tracking-wide md:mt-6 md:text-xl md:leading-9 lg:px-16">
          Welcome to The Botanical Journal, a sanctuary for plant enthusiasts
          and green-thumbed adventurers alike. In this verdant oasis, we embark
          on a journey through the fascinating world of plants, exploring their
          beauty, diversity, and endless wonders. Whether you&apos;re a seasoned
          plant parent or just beginning to cultivate your greenery, join us as
          we delve into the art and science of botanical living. From practical
          care tips to captivating plant stories, let&apos;s cultivate our
          passion for plants together in The Botanical Journal.
        </p>

        <div className="mb-4 grid grid-cols-1 gap-10 pb-20 font-serif md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            <Loading />
          ) : (
            blogPosts?.map((post) => (
              <div key={post.title} className=" w-[290.81] ">
                <img
                  src={post?.img}
                  alt={post.title}
                  loading="lazy"
                  className="w-full lg:h-[193.88px] lg:w-[300px]"
                />
                <header className="mt-5 text-xl ">{post.title}</header>
                <p className="my-3 tracking-wide">{`${post.intro.slice(
                  0,
                  170,
                )}...`}</p>

                <Link
                  className="font-semibold transition-all duration-700 ease-in-out hover:underline hover:underline-offset-4"
                  to={`/blog/${post.title.replaceAll(" ", "-").toLowerCase()}`}
                >
                  Read More &rarr;
                </Link>
              </div>
            ))
          )}
        </div>
        <Recommendations page="home" />
      </div>
    </>
  );
}

export default Blog;
