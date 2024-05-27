import Create_blog from "@/components/create_blog/Create_blog";
import { getSession } from "@/lib";
import console from "console";
import React from "react";

const page = async () => {
  // example of how the session will work
  const session = await getSession();
  console.log(session);
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
