import { FC } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { getTop10 } from "@/services/products";
import Home from "@/components/Home";

const Page: FC<PageProps<"/">> = async () => {
  const rackets = await getTop10();

  return <Home rackets={rackets} />;
}

export default Page;