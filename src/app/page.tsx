import { FC, Suspense } from "react";
import Home from "@/components/Home";
import RacketsHomeList from "@/components/Rackets/RacketsHomeList";
import { getAll, getTop10 } from "@/services/products";

const Page: FC<PageProps<"/">> = async () => {
  return (
    <Home>
      <Suspense fallback="loading all rackets...">
        <RacketsHomeList getData={() => getAll({ limit: "10" })} />
      </Suspense>
      <Suspense fallback="loading top 10 rackets...">
        <RacketsHomeList getData={() => getTop10()} />
      </Suspense>
    </Home>
  );
}

export default Page;