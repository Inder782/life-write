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
  const [files, setfiles] = useState<File | null>();
  const [filename, setfilename] = useState("");
  const [imageurl, setimageurl] = useState("");

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedfile = e.target.files?.[0];

    if (selectedfile) {
      setfiles(selectedfile);
      setfilename(selectedfile.name);
    }
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
          image: imageurl,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error creating blog ", error);
    }
  };
  const upload_file = async () => {
    const { data, error } = await supabase.storage
      .from("files")
      .upload(filename, files!);
    if (error) {
      console.log(error);
    } else {
      console.log("File uploaded successfully");
    }
  };

  const get_image_url = async (filename: string) => {
    const { data } = supabase.storage.from("files").getPublicUrl(filename);
    setimageurl(data.publicUrl);
  };

  useEffect(() => {
    if (!files || !filename) return;
    upload_file();
    get_image_url(filename);
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
            onChange={handleFileChange}
          />
        </div>
      )}
      {imageurl && <Image src={imageurl} width={500} height={500} alt="pic" />}
      <Editor value="" onChange={onEditorContentChanged} />
      <div className=" flex justify-center">
        <Button className="mt-20" onClick={handleSumbit}>
          Publish
        </Button>
      </div>
    </div>
  );
};

export default Create_blog;
