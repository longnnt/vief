/* eslint-disable react/react-in-jsx-scope */
import type { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";
import HomePage from "./home";
import { GetStaticProps } from "next";

import { Category } from "../common/type/type";
import axios from "axios";
import Navbar from "../components/layout/header/components/navbar/Navbar";

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
      />
      <HomePage />
    </>
  );
};

export default Home;
