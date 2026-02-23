import { FC } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { Racket } from "@/types/racket";

type Props = {
    rackets: Racket[];
}

const Home: FC<Props> = async ({ rackets }) => {
    return <div>
        <div className={styles.grid}>
            {rackets.map((racket) => (
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

export default Home;