"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import "react-quill/dist/quill.bubble.css";
import { useState } from "react";
import Editor from "@/components/quill/Editor";
import { supabase } from "@/lib/supabaseclient";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Create_blog = () => {
  const [open, setopen] = useState(false);
  const [title, settitle] = useState("");
  const [files, setfiles] = useState();
  const [filename, setfilename] = useState("");
  const title_set = (e: any) => {
    settitle(e.target.value);
  };
  const [editorHtmlValue, setEditorHtmlValue] = useState<string>("");
  const [editorMarkdownValue, setEditorMarkdownValue] = useState<string>("");
  const onEditorContentChanged = (content: any) => {
    setEditorHtmlValue(content.html);
    setEditorMarkdownValue(content.markdown);
  };
  const [upload, setupload] = useState(false);
  const router = useRouter();
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
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error creating blog ", error);
    }
  };

  useEffect(() => {
    const upload_image = async () => {
      console.log(filename);
      const { data, error } = await supabase.storage
        .from("files")
        .upload(filename, files!);
    };
    const get_image_url = async () => {
      const { data, error } = await supabase.storage
        .from("files")
        .createSignedUrl(filename, 60 * 60);
      console.log(data?.signedUrl);
    };
    upload_image();
    get_image_url();
  }, [files, filename]);

  return (
    <div className="p-10">
      <input
        className="focus:outline-none bg-transparent w-2/3 p-6 text-3xl font-bold"
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
            <Button onClick={() => setupload(!upload)} className="rounded-full">
              Image
            </Button>
          </div>
        )}
      </div>
      {upload && (
        <div>
          <input
            type="file"
            id="imageUpload"
            name="image"
            accept="image/*"
            className="mt-2"
            onChange={(e: any) => {
              setfiles(e.target.value);
              const filename = e.target.files[0].name;
              setfilename(filename);
            }}
          />
        </div>
      )}
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
