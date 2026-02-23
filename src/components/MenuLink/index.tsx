"use client"

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.css";

const MenuLink: FC<PropsWithChildren<LinkProps>> = ({ href, children }) => {
  const pathname = usePathname();

  const getActiveClass = () => {
    return href === pathname ? styles.active : "";
  }

  return <Link className={getActiveClass()} href={href} prefetch={false}>{children}</Link>
}

export default MenuLink;