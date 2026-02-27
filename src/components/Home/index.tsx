import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Home: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <>
      <div className={styles.grid}>{children}</div>

      <div className={styles.allLink}>
        <Link href="/rackets">Все ракетки →</Link>
      </div>
    </>
  );
};

export default Home;
