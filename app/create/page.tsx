"use client";
import Quill_F from "@/components/quill/Quill_F";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="p-10">
      <input
        className="focus:outline-none bg-transparent w-2/3 p-6 text-3xl"
        placeholder="Title goes here"
      />
      <div className="">
        <Button
          onClick={() => {
            setopen(!open);
          }}
          className="rounded-full"
        >
          +
        </Button>
        {open && (
          <div className="mt-2 ">
            <Button className="mr-2" variant={"secondary"}>
              Photo
            </Button>
            <Button variant={"secondary"}>Video</Button>
          </div>
        )}
        <Quill_F />
      </div>

      <div className=" flex justify-center">
        <Button className="mt-20 ">Publish</Button>
      </div>
    </div>
  );
};

export default Page;
