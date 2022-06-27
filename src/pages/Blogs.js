import { useEffect, useState } from "react";
import Blog from "./Blog";
import BlogModel from "./BlogModel";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [items, setItems] = useState({});

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleModel = (blog) => {
    if (blog) {
      setItems(blog);
    }
  };
  return (
    <div id="blog" className="my-10">
      <p className="text-primary text-md text-center tracking-[2px]">
        VISIT MY BLOG AND KEEP YOUR FEEDBACK
      </p>
      <p className="text-4xl text-center font-bold">MY BLOG</p>

      <div
       data-aos="fade-up"
       data-aos-easing="linear"
       data-aos-duration="1000"
       className="grid lg:grid-cols-3 md:grid-cols2 grid-cols-1 gap-10 my-5 p-5">
        {blogs?.map((blog) => (
          <Blog key={blog.id} blog={blog} handleModel={handleModel}></Blog>
        ))}
      </div>
      <BlogModel blog={items} />
    </div>
  );
};

export default Blogs;
