import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import HeadingComponent from "../components/Heading";
import Title from "../components/Title";
import styles from "../../../styles/Header.module.css";
import { SectionHeaderProps } from "../interface";

export default function SectionHeader({
  wrapperStyle,
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
      {...wrapperStyle}
      className={isReverse ? styles.reverse : styles.noReverse}
      flexDirection="column"
      alignItems={alignItems}
      mt={{ sm: "48px" }}
    >
      <Title category={category} title={title} />
      <HeadingComponent
        wrapperStyle={{
          w: headingWidth,
          h: headingHeight,
          mt: headingMarginTop,
        }}
        heading={heading}
      />
    </Flex>
  );
}
