/* eslint-disable react/react-in-jsx-scope */
import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Section from "../components/section";
import SectionCompany from "../components/section-company";
import SectionPolicy from "../components/section-policy";
import HeadingComponent from "../components/section/components/Heading";
import ShortDes from "../components/section/components/ShortDes";
import SectionHeader from "../components/section/section-header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Box>
      <Section>
        <SectionPolicy />
      </Section>
      <Section>
        <SectionCompany />
      </Section>
    </Box>
  );
};

export default Home;
