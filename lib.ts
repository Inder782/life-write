"use server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { LoginParams } from "./types";
import { PrismaClient } from "@prisma/client";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

const prisma = new PrismaClient();

export async function encrypt(payload: any) {
  const expirationTime = Math.floor(Date.now() / 1000) + 3600;
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expirationTime)
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, { algorithms: ["HS256"] });
  return payload;
}

export async function login({ user, pwd }: LoginParams) {
  // fetch the user details from the database
  // verify them , based on that
  const users = await prisma.admin.findUnique({
    where: {
      username: user,
      password: pwd,
    },
  });

  if (users) {
    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ user });
    cookies().set("session", session);
  } else {
    return { message: "Invalid ", status: 401 };
  }
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
