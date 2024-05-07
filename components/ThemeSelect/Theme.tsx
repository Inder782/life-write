"use client";
import React from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useTheme } from "@/context/ThemeContext";

const Theme = () => {
  const { mode, setMode } = useTheme();
  const handlechange = () => {
    setMode("light");
  };
  return (
    <div className="bg-black flex items-center justify-between p-2">
      <div className="flex items-center space-x-2">
        <Switch id="dark_mode" onClick={handlechange} />
        <Label htmlFor="dark_mode" className="text-white ">
          Dark Mode
        </Label>
      </div>
    </div>
  );
};
export default Theme;
