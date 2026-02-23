import { FC, Suspense } from "react";
import Home from "@/components/Home";
import RacketsHomeList from "@/components/Rackets/RacketsHomeList";
import { getTop10 } from "@/services/products";

const Page: FC<PageProps<"/top10">> = async () => {
    return (
        <Home>
            <Suspense fallback="loading top 10 rackets...">
                <RacketsHomeList getData={() => getTop10()} />
            </Suspense>
        </Home>
    );
}

export default Page;