"use client";
import React from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const Theme = () => {
  const { mode, setMode } = useTheme();

  const handleTheme=()=>{
    if (localStorage.theme=="dark"){
      setMode("light")
      localStorage.theme="light"
    }    
    else{
      setMode("dark")
      localStorage.theme="dark"
      
    }
  }

  return (
    <div className="bg-black flex items-center justify-between p-2">
      <div className="flex items-center space-x-2">
        <Switch id="dark_mode" onClick={handleTheme}/>
       {mode ==="light" ?(<Image src="/sun.svg" width={50} height={255} alt="sun" className="invert"/>)
       :
       ((<Image src="/moon.svg" width={50} height={255} alt="sun" className="invert"/>))}
      </div>
    </div>
  );
};
export default Theme;
