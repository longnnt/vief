import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface DescriptionProps {
  children: React.ReactNode;
  ml?: string;
  mb?: string;
}

export default function Description({
  children,
  ml = "8px",
  mb = "8px",
}: DescriptionProps) {
  return (
    <Flex alignItems={"center"}>
      {children}
      <Text ml={ml}>Thứ bảy, 08:00 ngày 05/09/2022</Text>
    </Flex>
  );
}
