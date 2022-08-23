import Clock from "@/src/components/section/components/Clock";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface TimeLeftProps {
  days?: number;
  ml?: string;
}

export default function TimeLeft({ days, ml }: TimeLeftProps) {
  return (
    <Flex ml={ml} alignItems="center">
      <Clock />
      <Text
        color={"orange.primary"}
        lineHeight="20px"
        fontWeight={600}
        ml="8px"
      >
        Còn {days} ngày
      </Text>
    </Flex>
  );
}
