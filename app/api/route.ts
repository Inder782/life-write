import { NextResponse } from "next/server";

export const GET = async (request: Request, res: Response) => {
  console.log("i am here");
  return NextResponse.json({ hi: "hello" });
};
