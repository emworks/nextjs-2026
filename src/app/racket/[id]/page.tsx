import { FC } from "react";
import { getById } from "@/services/products";
import RacketDetails from "@/components/Rackets/RacketDetails";
import { notFound } from "next/navigation";

const Page: FC<PageProps<"/racket/[id]">> = async ({ params }) => {
  const { id } = await params;
  const { product } = await getById(id);

  if (!product) {
    return notFound();
  }

  return <RacketDetails racket={product} />;
}

export default Page;