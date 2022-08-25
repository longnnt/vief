/* eslint-disable react/react-in-jsx-scope */
import type { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";
import { HomeLayout } from "../components/layout/HomeLayout";
import HomePage from "./home";

const Home = () => {
  return <HomePage />;
};

export default Home;
