import { ReactNode } from "react";
import React from "react";
import { Category } from "@/src/common/type/type";
import Navbar from "./header/components/navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
