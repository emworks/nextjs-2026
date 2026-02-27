import { FC } from "react";
import styles from "./styles.module.css";
import { Racket } from "@/types/racket";
import RacketCard from "@/components/Rackets/RacketCard";

type Props = {
  rackets: Racket[];
};

const RacketsList: FC<Props> = async ({ rackets }) => {
  return (
    <div>
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
              <RacketCard key={racket.id} racket={racket} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RacketsList;
