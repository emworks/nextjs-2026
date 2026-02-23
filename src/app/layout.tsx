import { FC } from "react";
import Layout from "@/components/Layout";

const RootLayout: FC<LayoutProps<"/">> = ({ children }) => {
  return <Layout>{children}</Layout>;
}

export default RootLayout;