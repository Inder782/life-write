import { Card } from "@/components/Card";
import React from "react";

// for now static will make dynamic once backend work is done
const page = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default page;
