import { useState } from "react";
import useItems from "../hook/useItems";
import Blog from "./Blog";
import BlogModel from "./BlogModel";

const Blogs = () => {
  const [blogs, setBlogs] = useItems("blog");
  const [items, setItems] = useState({});

  const handleModel = (blog) => {
    setItems(blog);
  };
  return (
    <div id="blog" className="h-[calc(100vh-81px)]">
      <p className="text-primary text-md text-center tracking-[2px]">
        VISIT MY BLOG AND KEEP YOUR FEEDBACK
      </p>
      <p className="text-4xl text-center font-bold">MY BLOG</p>

      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="grid lg:grid-cols-3 md:grid-cols2 grid-cols-1 gap-10 my-5 p-5"
      >
        {blogs?.map((blog) => (
          <Blog key={blog._id} blog={blog} handleModel={handleModel}></Blog>
        ))}
      </div>
      {items && <BlogModel blog={items} />}
    </div>
  );
};

export default Blogs;
