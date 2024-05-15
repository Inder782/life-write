import Quill_F from "@/components/quill/Quill_F";
import React from "react";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="p-10">
      <input
        className="focus:outline-none bg-transparent w-2/3 p-6 text-3xl"
        placeholder="Title goes here"
      />

      <Quill_F />
      <div className=" flex justify-center">
        <Button className="mt-20 ">Publish</Button>
      </div>
    </div>
  );
};

export default Page;
