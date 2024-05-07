
import { Card } from "@/components/Card";
import React from "react";

// for now static will make dynamic once backend work is done
const page = () => {
  return <div className="grid grid-cols-3"> 
    <Card/>
    <Card/>
    <Card/>
  </div>;
};

export default page;
