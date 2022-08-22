import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import HeadingComponent from "../components/Heading";
import Title from "../components/Title";
import styles from "../../../styles/Header.module.css";

interface SectionHeaderProps {
  w?: string;
  h?: string;
  p?: string;
  m?: string;
  mb?: string;
  category?: string;
  title?: string;
  titleWidth?: string;
  titleHeight?: string;
  heading?: string;
  headingWidth?: string;
  headingHeight?: string;
  headingMarginTop?: string;
  isReverse?: boolean;
}

export default function SectionHeader({
  w,
  h,
  p,
  m,
  mb,
  category,
  title,
  heading,
  headingWidth,
  headingHeight,
  headingMarginTop,
  isReverse = false,
}: SectionHeaderProps) {
  return (
    <Box
      w={w}
      h={h}
      p={p}
      m={m}
      mb={mb}
      className={isReverse ? styles.reverse : styles.noReverse}
    >
      <Title category={category} title={title} w={"fit-content"} />
      <HeadingComponent
        heading={heading}
        w={headingWidth}
        h={headingHeight}
        mt={headingMarginTop}
      />
    </Box>
  );
}
