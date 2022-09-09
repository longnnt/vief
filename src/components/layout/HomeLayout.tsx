import { execute } from "@/src/common/lib/request";
import { Category } from "@/src/components/layout/interfaces";
import { Box } from "@chakra-ui/react";
import {
  ENTERPRISE_CATEGORY,
  EVENT_CATEGORY,
  LIBRARY_CATEGORY,
  POLICY_CATEGORY,
} from "@/src/common/constants/urlAPI";
import { ReactNode, useEffect, useState } from "react";
import Footer from "./footer/Footer";
import Navbar from "./header/components/navbar/Navbar";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const [policy, setPolicy] = useState<Category>();
  const [company, setCompany] = useState<Category>();
  const [event, setEvent] = useState<Category>();
  const [library, setLibrary] = useState<Category>();

  useEffect(() => {
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
