"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function Create(title: string, body: any, image: string) {
  try {
    const blog = await prisma.blog.create({
      data: {
        title: title,
        body: body,
        image: image,
      },
    });
  } catch (error) {
    console.error("Error while creating it", error);
  } finally {
    console.log("Successfully created blog");
    await prisma.$disconnect();
  }
}
