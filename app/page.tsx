import { Card } from "@/components/Card";
import Footer from "@/components/footer/Footer";
import { Blogs } from "@/lib/Blogs";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import React from "react";

// for now static will make dynamic once backend work is done
const page = async () => {
  const blogs = await Blogs();
  revalidatePath("/");
  return (
    <div className="grid grid-cols-4 max-[1300px]:grid-cols-3 max-[1000px]:grid-cols-2 max-[650px]:grid-cols-1 mb-52">
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
