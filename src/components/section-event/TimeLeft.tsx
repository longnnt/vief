import Clock from "@/src/Images/Icons/Clock";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { TimeLeftProps } from "./interface";

export default function TimeLeft({ days, wrapperStyle }: TimeLeftProps) {
  return (
    <Flex {...wrapperStyle} alignItems="center">
      <Clock />
      <Text
        color={"orange.primary"}
        lineHeight="20px"
        fontWeight={600}
        ml={wrapperStyle?.ml || "8px"}
      >
        Còn {days} ngày
      </Text>
    </Flex>
  );
}