import { ReactNode } from "react";
import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./header/components/navbar/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
