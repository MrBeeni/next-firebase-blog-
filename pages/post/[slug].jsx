import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MyContext } from "@/context/MyContext";
const Post = () => {
  const router = useRouter();
  const { posts } = useContext(MyContext);
  const [data, setData] = useState();

  const slug = router.query.slug;
  useEffect(() => {
    if (posts.length === 0) {
      return;
    }
    setData(posts?.find((post) => post.id === slug));
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {data?.category}
            </h2>
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {data?.date}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {data?.title}
            </h1>

            <p className="leading-relaxed">{data?.description}</p>

            <div className="flex mt-4">
              <button className=" text-white bg-indigo-500 border-0 py-2 px-6 shadow-lg shadow-green-200 focus:outline-none hover:scale-105 hover:bg-indigo-600 rounded text-lg">
                Share
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 shadow-lg shadow-green-200 hover:scale-125">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
