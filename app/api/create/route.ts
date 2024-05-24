import { Create } from "@/lib/Create_blog";

import { NextResponse } from "next/server";

export const POST = async (request: Request, res: Response) => {
  const { title, body, image } = await request.json();
  Create(title, body, image);
  return NextResponse.json({ hi: "hello" });
};
