import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { user, password } = await req.json();
  console.log(user, password);
  return NextResponse.json({ user, password });
};
