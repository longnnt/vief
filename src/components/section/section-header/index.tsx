import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import HeadingComponent from "../components/Heading";
import Title from "../components/Title";
import styles from "../../../styles/Header.module.css";
import { SectionHeaderProps } from "../interface";

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
  alignItems,
}: SectionHeaderProps) {
  return (
    <Flex
      w={w}
      h={h}
      p={p}
      m={m}
      mb={mb}
      className={isReverse ? styles.reverse : styles.noReverse}
      flexDirection="column"
      alignItems={alignItems}
    >
      <Title category={category} title={title} w={"fit-content"} />
      <HeadingComponent
        heading={heading}
        w={headingWidth}
        h={headingHeight}
        mt={headingMarginTop}
      />
    </Flex>
  );
}
