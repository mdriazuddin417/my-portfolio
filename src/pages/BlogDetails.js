import React, { useEffect } from "react";

const BlogDetails = () => {
  return (
    <div>
      <div className=" relative bg-white my-shadow-icon m-10 p-10 rounded-xl ">
        <div className="">
          <div>
            <img
              src="https://i.ibb.co/fFWgpHN/pxfuel-com-1.jpg"
              alt=""
              className="h-[500px] w-full rounded "
            />
          </div>
          <h4 className="text-primary text-md">App development</h4>
          <h4 className="text-black text-2xl font-semibold">
            The services provide for design
          </h4>
          <p className="text-gray-500 text-md">
            Web developers around the world share the desire to write, debug,
            and ship code day in and day out. It’s not an easy job since most of
            the time you’re constantly learning on the fly. But with great study
            and work habits, becoming an experienced web developer is attainable
            (especially if you’re considering a Thinkful Engineering Immersion
            or Engineering Flex course.There are several developers out there
            who like to share their experience with others. It’s tough to glean
            insights from every top techie that may have a blog, but there are
            definitely some top web developer blogs and publications worth the
            read. Here are some of the top ones you should check out if you’re
            an aspiring or current web developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
