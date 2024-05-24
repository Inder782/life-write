import { Blog_Content } from "@/lib/Read_Blog";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const id = parseInt(params.slug);
  const data = await Blog_Content(id);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <Image src={data?.image} width={500} height={500} alt="thumbnail" />
      <div className="text-4xl font-bold ">
        <h1>{data?.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data!.body }} className="p-16" />
    </div>
  );
}
