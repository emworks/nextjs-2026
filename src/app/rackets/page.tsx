import { FC } from "react";
import { Racket } from "@/types/racket";
import styles from "./page.module.css";
import Link from "next/link";

async function getRackets(): Promise<Racket[]> {
  const res = await fetch("http://localhost:4000/api/products?limit=20", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
}

const Page: FC<PageProps<"/rackets">> = async () => {
  const rackets = await getRackets();

  return <div>
    <div className={styles.container}>
      <aside className={styles.filters}>
        <h3>Бренды</h3>
        <ul>
          <li>Wilson</li>
          <li>Babolat</li>
          <li>Head</li>
        </ul>

        <h3>Цвет</h3>
        <ul>
          <li>Черный</li>
          <li>Красный</li>
          <li>Синий</li>
        </ul>
      </aside>

      <div className={styles.content}>
        <h2>Список ракеток</h2>

        <div className={styles.grid}>
          {rackets.map((racket) => (
            <div key={racket.id} className={styles.card}>
              <img src={racket.imageUrl} alt={racket.name} />
              <h3>{racket.name}</h3>
              <p>${racket.price}</p>
              <Link href={`/racket/${racket.id}`}>Подробнее</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>;
}

export default Page;