import { ChakraProps, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { DescriptionProps } from "./interface";

export default function Description({
  children,
  wrapperStyle,
}: DescriptionProps) {
  return (
    <Flex
      alignItems={"center"}
      {...wrapperStyle}
      ml={wrapperStyle?.ml}
      mb={wrapperStyle?.mb || "8px"}
    >
      {children}
      <Text ml={wrapperStyle?.ml || "8px"}>Thứ bảy, 08:00 ngày 05/09/2022</Text>
    </Flex>
  );
}
