import { useState } from "react";
import { Link } from "react-router-dom";
import useItems from "../hook/useItems";
import Blog from "./Blog";
import Loading from "../pages/Loading";

const Blogs = () => {
  const [blogs, loading] = useItems("blog");

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div id="blog" className="h-[calc(100vh-81px)] pt-5">
      <p className="text-primary text-md text-center tracking-[2px]">
        VISIT MY BLOG AND KEEP YOUR FEEDBACK
      </p>
      <p className="text-4xl text-center font-bold">MY BLOG</p>

      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="grid lg:grid-cols-3 md:grid-cols2 grid-cols-1 gap-10 my-5 p-12"
      >
        {blogs?.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
