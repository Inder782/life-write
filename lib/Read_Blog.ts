"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function Blog_Content(id: number) {
  try {
    const blogs = prisma.blog.findUnique({
      where: {
        id: id,
      },
    });

    if (blogs) {
      return blogs;
    } else {
      console.log("error while fetching");
      return null;
    }
  } catch (error) {
    console.error("Error while fetching blogs", error);
  } finally {
    await prisma.$disconnect();
  }
}
