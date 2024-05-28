import { Blog_Content } from "@/lib/Read_Blog";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const id = parseInt(params.slug);
  const data = await Blog_Content(id);
  if (!data) {
    return <div>Blog not found</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center  w-1/2 mx-auto lg:w-82 max-md:w-96 shadow-md">
      <div className="p-8 w-full">
        <h1 className="text-4xl font-bold text-left ">{data?.title}</h1>
      </div>
      <Image
        src={data?.image!}
        width={850}
        height={200}
        alt="thumbnail"
        className="mt-2"
      />
      <div dangerouslySetInnerHTML={{ __html: data!.body }} className="p-10" />
    </div>
  );
}
