import { Blogs } from "@/lib/Blogs";
import React from "react";

const Blog = async () => {
  const data = await Blogs();
  console.log(data);
  return (
    <div className="mt-10">
      {data?.map((datas) => (
        <div
          key={datas.id}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="">
            <strong className="text-3xl mt-10">{datas.title}</strong>
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: datas.body,
            }}
            className="mt-10"
          />
        </div>
      ))}
      <h1></h1>
    </div>
  );
};

export default Blog;
