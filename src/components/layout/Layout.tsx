import { ReactNode } from "react";
import React from "react";
import { Category } from "@/src/common/type/type";
import Navbar from "./header/components/navbar/Navbar";
import { Footer } from "./footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
