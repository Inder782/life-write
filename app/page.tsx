import { Card } from "@/components/Card";
import { Blogs } from "@/lib/Blogs";
import React from "react";

// for now static will make dynamic once backend work is done
const page = async () => {
  const blogs = await Blogs();

  console.log(blogs);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      {blogs?.map((item) => (
        <Card key={item.id} title={item.title} />
      ))}
    </div>
  );
};

export default page;
