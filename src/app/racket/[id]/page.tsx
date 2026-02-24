import { FC } from "react";
import { getById, getMetaById } from "@/services/products";
import RacketDetails from "@/components/Rackets/RacketDetails";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps<"/racket/[id]">) {
  const { id } = await params;
  const { product } = await getMetaById(id);

  if (!product) {
    return {
      title: "Tennis racket",
      description: "Tennis racket",
    };
  }

  const {
    name,
    brand: { name: brandName },
  } = product;

  return {
    title: `${name} - ${brandName}`,
    description: `${name} - ${brandName}`,
  };
}

const Page: FC<PageProps<"/racket/[id]">> = async ({ params }) => {
  const { id } = await params;
  const { product } = await getById(id);

  if (!product) {
    return notFound();
  }

  return <RacketDetails racket={product} />;
}

export default Page;