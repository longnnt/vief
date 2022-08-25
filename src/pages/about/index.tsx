/* eslint-disable react/react-in-jsx-scope */
import type { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GetStaticProps } from "next";

import axios from "axios";
import { Category } from "@/src/common/type/type";
import Navbar from "@/src/components/layout/header/components/navbar/Navbar";
import { Stack } from "@chakra-ui/react";
import WeAre from "@/src/components/aboutComponents/WeAre/WeAre";
import Wallpaper from "@/src/components/aboutComponents/wallpaper/Wallpaper";
import Thumbnail from "@/src/components/aboutComponents/thumbnail/Thumbnail";
import Master from "@/src/components/aboutComponents/master/Master";
import Contact from "@/src/components/aboutComponents/contact/Contact";

// export const getStaticPaths: GetStaticPaths = async () => {
//   const arr: string[] = ['slug1', 'slug2']
//   const paths = arr.map((slug) => {
//       return {
//           params: { slug },
//       }
//   })
//   return { paths }
// }

export const getStaticProps: GetStaticProps = async (context) => {
  // const resPolicy= await axios.get('/client/categories?type=POLICY&field=WOOD&isFeatured=1', {method: 'GET', headers: {lang: 'en' || 'vi'}}))
  // const resCompany= await axios.get('/client/categories?type=COMPANY&field=WOOD&isFeatured=1', {method: 'GET', headers: {lang: 'en' || 'vi'}}))
  // const resEvent= await axios.get('/client/categories?type=EVENT&field=WOOD&isFeatured=1', {method: 'GET', headers: {lang: 'en' || 'vi'}}))
  // const resLibrary= await axios.get('/client/categories?type=LIBRARY&field=WOOD&isFeatured=1', {method: 'GET', headers: {lang: 'en' || 'vi'}}))
  const resPolicy = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const resCompany = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const resEvent = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const resLibrary = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  const datapolicy: Category[] = await resPolicy.data;
  const datacompany: Category[] = await resCompany.data;
  const dataevent: Category[] = await resEvent.data;
  const datalibrary: Category[] = await resLibrary.data;
  return {
    props: {
      dataPolicy: datapolicy,
      dataCompany: datacompany,
      dataEvent: datacompany,
      dataLibrary: datacompany,
    },
  };
};

const Home = ({
  dataPolicy,
  dataCompany,
  dataEvent,
  dataLibrary,
}: {
  dataPolicy: Category;
  dataCompany: Category;
  dataEvent: Category;
  dataLibrary: Category;
}) => {
  return (
    <>
      <Navbar
        dataPolicy={dataPolicy}
        dataCompany={dataCompany}
        dataEvent={dataEvent}
        dataLibrary={dataLibrary}
      ></Navbar>
      <Stack
        py="64px"
        spacing="64px"
        pt={{ base: "none", md: "150px", sm: "64px" }}
      >
        <WeAre></WeAre>
        <Wallpaper></Wallpaper>
        <Thumbnail></Thumbnail>
        <Master></Master>
        <Contact></Contact>
      </Stack>
    </>
  );
};

export default Home;
