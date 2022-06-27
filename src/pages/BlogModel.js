import React from "react";

const BlogModel = ({ blog }) => {
  const { picture, name, text, category } = blog;
  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className=" relative bg-white my-shadow-icon m-10 p-10 rounded-xl ">
          <label
            htmlFor="my-modal-4"
            className="btn btn-secondary btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="">
            <div>
              <img src={picture} alt="" className="h-[500px] w-full rounded " />
            </div>
            <h4 className="text-primary text-md">{category}</h4>
            <h4 className="text-black text-2xl font-semibold">{name}</h4>
            <p className="text-gray-500 text-md">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModel;
