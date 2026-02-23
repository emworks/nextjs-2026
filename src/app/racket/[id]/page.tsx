import { FC } from "react";
import styles from "./page.module.css";
import { RacketResponse } from "@/types/racket";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

async function getRacket(id: string): Promise<RacketResponse> {
  const res = await fetch(`http://localhost:4000/api/product/${id}`);

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}

const Page: FC<PageProps<"/racket/[id]">> = async ({ params }) => {
  const { id } = await params;
  const { product: racket } = await getRacket(id);

  return <div>
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>{racket.name}</h1>
        <p>{racket.description}</p>
      </div>

      <div className={styles.center}>
        <img src={racket.imageUrl} alt={racket.name} />
      </div>

      <div className={styles.right}>
        <h2>${racket.price}</h2>
      </div>
    </div>
  </div>;
}

export default Page;