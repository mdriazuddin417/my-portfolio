import React from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
const Blog = ({ blog, handleModel }) => {
  const { name, category, text, picture, _id } = blog;

  return (
    <Link to={`/blog/${_id}`}>
      <div className="space-y-5 p-10 rounded-2xl my-shadow-icon cursor-pointer blog-card ">
        <div className="h-[300px] w-full ">
          <img src={picture} alt="" className="h-full w-full rounded " />
        </div>

        <div className="flex justify-between items-center gap-5">
          <span className=" " onClick={() => handleModel(blog)}>
            <span className="text-xl font-bold blog-title ">
              {name}
              <span className=" ">
                <BsArrowUpRight className="blog-icon  text-2xl ml-2 inline-block duration-500" />
              </span>
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
