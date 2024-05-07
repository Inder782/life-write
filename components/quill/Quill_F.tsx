"use client"
import React from 'react'
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import { useState } from 'react';
import Editor from '@/components/quill/Editor';

const initialMarkdownContent = "";

const Quill_F = () => {
    const [editorHtmlValue, setEditorHtmlValue] = useState<string>("");
    const [editorMarkdownValue, setEditorMarkdownValue] = useState<string>("");
    const onEditorContentChanged = (content:any) => {
      setEditorHtmlValue(content.html);
      setEditorMarkdownValue(content.markdown);
    };
    return(
       <Editor
        value="Start your story from here"
        onChange={onEditorContentChanged}

      />
    )
  
}

export default Quill_F;