import { NextResponse } from "next/server";

export const GET = async (request: Request, res: Response) => {
  return NextResponse.json({ hi: "hello" });
};
