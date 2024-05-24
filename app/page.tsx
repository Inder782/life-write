import { Card } from "@/components/Card";
import { Blogs } from "@/lib/Blogs";
import Link from "next/link";
import React from "react";

// for now static will make dynamic once backend work is done
const page = async () => {
  const blogs = await Blogs();

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      {blogs?.map((item) => (
        <div key={item.id}>
          <Link href={`post/${item.id}`}>
            <Card key={item.id} title={item.title} image={item.image} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default page;
