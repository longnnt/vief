import Clock from "@/src/Images/Icons/Clock";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { TimeLeftProps } from "../interface";

export default function TimeLeft({
  days,
  wrapperStyle,
  stroke,
  isExpired,
}: TimeLeftProps) {
  return (
    <Flex {...wrapperStyle} alignItems="center">
      <Clock wrapperStyle={{ stroke: stroke }} />
      <Text
        color={wrapperStyle?.color || "orange.primary"}
        lineHeight="20px"
        fontWeight={600}
        ml={wrapperStyle?.ml || "8px"}
      >
        {!isExpired ? `Còn ${days} ngày để đăng ký` : "Đã hết hạn đăng ký"}
      </Text>
    </Flex>
  );
}
