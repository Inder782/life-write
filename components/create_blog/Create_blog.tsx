"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import "react-quill/dist/quill.bubble.css";
import { useState } from "react";
import Editor from "@/components/quill/Editor";

const Create_blog = () => {
  const [open, setopen] = useState(false);
  const [title, settitle] = useState("");

  const title_set = (e: any) => {
    settitle(e.target.value);
  };
  const [editorHtmlValue, setEditorHtmlValue] = useState<string>("");
  const [editorMarkdownValue, setEditorMarkdownValue] = useState<string>("");
  const onEditorContentChanged = (content: any) => {
    setEditorHtmlValue(content.html);
    setEditorMarkdownValue(content.markdown);
  };
  const handleSumbit = async () => {
    try {
      const response = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          body: editorHtmlValue,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to create blog post");
      }
    } catch (error) {
      console.error("Error creating blog ", error);
    }
  };
  return (
    <div className="p-10">
      <input
        className="focus:outline-none bg-transparent w-2/3 p-6 text-3xl"
        placeholder="Title goes here"
        onChange={title_set}
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
      </div>
      <Editor value="" onChange={onEditorContentChanged} />
      <div className=" flex justify-center">
        <Button className="mt-20 " onClick={handleSumbit}>
          Publish
        </Button>
      </div>
    </div>
  );
};

export default Create_blog;
