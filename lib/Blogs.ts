"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function Blogs() {
  try {
    const blogs = await prisma.blog.findMany({});

    return blogs;
  } catch (error) {
    console.error("Error retrieving data", error);
  } finally {
    await prisma.$disconnect();
  }
}
