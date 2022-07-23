import React from "react";
import { useParams } from "react-router-dom";
import useSingleItem from "../hook/useSingleItem";
import Loading from "./Loading";
const BlogModel = () => {
  const { id } = useParams();
  const [blog, loading] = useSingleItem("blog", id);
  const { picture, name, text, category } = blog;
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="h-screen m-10">
      <div className="  bg-white my-shadow-icon rounded-xl lg:p-10 md:p-10 p-8">
        <div>
          <img src={picture} alt="" className="h-[500px] w-full rounded-lg " />
        </div>
        <h4 className="text-primary text-md mt-5">{category}</h4>
        <h4 className="text-black text-2xl font-semibold">{name}</h4>
        <p className="text-gray-500 text-md">{text}</p>
      </div>
    </div>
  );
};

export default BlogModel;
