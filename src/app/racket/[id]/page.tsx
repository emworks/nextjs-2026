import { FC } from "react";
import { getById } from "@/services/products";
import RacketDetails from "@/components/Rackets/RacketDetails";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

const Page: FC<PageProps<"/racket/[id]">> = async ({ params }) => {
  const { id } = await params;
  const { product } = await getById(id);

  return <RacketDetails racket={product} />;
}

export default Page;