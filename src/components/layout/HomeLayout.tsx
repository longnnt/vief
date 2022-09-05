import { execute } from "@/src/common/lib/request";
import { Category } from "@/src/common/type/type";
import { Box } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import Footer from "./footer/Footer";
import Navbar from "./header/components/navbar/Navbar";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const [policy, setPolicy] = useState<Category>([]);
  const [company, setCompany] = useState<Category>([]);
  const [event, setEvent] = useState<Category>([]);
  const [library, setLibrary] = useState<Category>([]);

  useEffect(() => {
    handleGetCategories();
  }, []);

  async function handleGetCategories() {
    // const resPolicy= await axios.get('/client/categories?type=POLICY&field=WOOD&isFeatured=1', {method: 'GET', headers: {lang: 'en' || 'vi'}}))
    // const resCompany= await axios.get('/client/categories?type=COMPANY&field=WOOD&isFeatured=1', {method: 'GET', headers: {lang: 'en' || 'vi'}}))
    // const resEvent= await axios.get('/client/categories?type=EVENT&field=WOOD&isFeatured=1', {method: 'GET', headers: {lang: 'en' || 'vi'}}))
    // const resLibrary= await axios.get('/client/categories?type=LIBRARY&field=WOOD&isFeatured=1', {method: 'GET', headers: {lang: 'en' || 'vi'}}))
    const resPolicy = await execute.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const resCompany = await execute.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const resEvent = await execute.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const resLibrary = await execute.get(
      "https://jsonplaceholder.typicode.com/users"
    );
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
