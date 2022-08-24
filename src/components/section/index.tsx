import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { SectionProps } from "./interface";

export default function Section({
  children,
  marginLeftRight = "352px",
  wrapperStyle,
}: SectionProps) {
  return (
    <Box m={`128px ${marginLeftRight} 0`} w={"1216px"} {...wrapperStyle}>
      {children}
    </Box>
  );
}
