import { FC } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { Racket } from "@/types/racket";

type Props = {
    racket: Racket
}

const RacketCard: FC<Props> = ({ racket }) => {
    return (
        <div className={styles.card}>
            <img src={racket.imageUrl} alt={racket.name} />
            <h3>{racket.name}</h3>
            <p>${racket.price}</p>
            <Link href={`/racket/${racket.id}`}>Подробнее</Link>
        </div>
    )
}

export default RacketCard;