import Create_blog from "@/components/create_blog/Create_blog";
import { getSession } from "@/lib";
import React from "react";

const page = async () => {
  const session = await getSession();
  if (!session) {
    return <div>You are not an admin buddy</div>;
  }
  return (
    <div>
      <Create_blog />
    </div>
  );
};

export default page;
