import { Create } from "@/lib/Create_blog";
import console from "console";

import { NextResponse } from "next/server";

export const POST = async (request: Request, res: Response) => {
  const { title, body } = await request.json();
  Create(title, body);
  return NextResponse.json({ hi: "hello" });
};
