import { FC } from "react";
import { getAll } from "@/services/products";
import RacketsList from "@/components/Rackets/RacketsList";

const Page: FC<PageProps<"/rackets">> = async () => {
  const rackets = await getAll({});
  return <RacketsList rackets={rackets} />;
}

export default Page;