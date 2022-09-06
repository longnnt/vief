import { ReactNode, useLayoutEffect, useState } from "react";
import React from "react";
import { Category } from "@/src/common/type/type";
import Navbar from "./header/components/navbar/Navbar";
import Footer from "./footer/Footer";
import { execute } from "@/src/common/lib/request";
import { Box } from "@chakra-ui/react";
import {
  ENTERPRISE_CATEGORY,
  EVENT_CATEGORY,
  LIBRARY_CATEGORY,
  POLICY_CATEGORY,
} from "@/src/common/constants/urlAPI";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const [policy, setPolicy] = useState<Category>();
  const [company, setCompany] = useState<Category>();
  const [event, setEvent] = useState<Category>();
  const [library, setLibrary] = useState<Category>();

  useLayoutEffect(() => {
    handleGetCategories();
  }, []);

  async function handleGetCategories() {
    const resPolicy = await execute.get(POLICY_CATEGORY);
    const resCompany = await execute.get(ENTERPRISE_CATEGORY);
    const resEvent = await execute.get(EVENT_CATEGORY);
    const resLibrary = await execute.get(LIBRARY_CATEGORY);
    setPolicy(resPolicy.data);
    setCompany(resCompany.data);
    setEvent(resEvent.data);
    setLibrary(resLibrary.data);
  }
  return (
    <Box position="relative" h="100vh" overflow="scroll">
      <Navbar
        dataPolicy={policy}
        dataCompany={company}
        dataEvent={event}
        dataLibrary={library}
      />
      {children}
      <Footer />
    </Box>
  );
};

export { HomeLayout };
