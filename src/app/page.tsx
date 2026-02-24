import { FC } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Racket } from "@/types/racket";

async function getTop10(): Promise<Racket[]> {
  const res = await fetch("http://localhost:4000/api/top-10", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

const Page: FC<PageProps<"/">> = async () => {
  const rackets = await getTop10();

  return <div>
    <div className={styles.grid}>
      {rackets.slice(0, 3).map((racket) => (
        <div key={racket.id} className={styles.card}>
          <img src={racket.imageUrl} alt={racket.name} />
          <h3>{racket.name}</h3>
          <Link href={`/racket/${racket.id}`}>Подробнее</Link>
        </div>
      ))}
    </div>

    <div className={styles.allLink}>
      <Link href="/rackets">Все ракетки →</Link>
    </div>
  </div>;
}

export default Page;