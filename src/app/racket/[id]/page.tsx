import { FC } from "react";
import { getById } from "@/services/products";
import RacketDetails from "@/components/Rackets/RacketDetails";

const Page: FC<PageProps<"/racket/[id]">> = async ({ params }) => {
  const { id } = await params;
  const { product } = await getById(id);

  return <RacketDetails racket={product} />;
}

export default Page;