import { FC, PropsWithChildren } from "react";
import MenuLink from "@/components/MenuLink";
import styles from "./styles.module.css";
import NextTopLoader from "nextjs-toploader";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body>
        <NextTopLoader />
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <nav>
              <MenuLink href="/">Главная</MenuLink>
              <MenuLink href="/rackets">Ракетки</MenuLink>
              <MenuLink href="/top10">Топ-10</MenuLink>
            </nav>
          </header>

          <main className={styles.main}>{children}</main>

          <footer className={styles.footer}>© 2025 Tennis Store</footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
