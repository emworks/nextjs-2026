import { FC } from "react";
import styles from "./styles.module.css";
import { Racket } from "@/types/racket";
import FavoriteButton from "@/components/Rackets/FavoriteButton";

type Props = {
  racket: Racket;
};

const RacketDetails: FC<Props> = async ({ racket }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>{racket.name}</h1>
          <p>{racket.description}</p>
          <FavoriteButton userData={racket.userData} />
        </div>

        <div className={styles.center}>
          <img src={racket.imageUrl} alt={racket.name} />
        </div>

        <div className={styles.right}>
          <h2>${racket.price}</h2>
        </div>
      </div>
    </div>
  );
};

export default RacketDetails;
