import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { PolicyUpdateProps } from "../interface";
import PolicyUpdateRight from "./PolicyUpdateRight";

export default function PolicyUpdate({ mt }: PolicyUpdateProps) {
  return (
    <Flex justifyContent={"space-between"} alignItems="center" mt={mt}>
      <Image src="./policy-update.png" alt="" />
      <PolicyUpdateRight />
    </Flex>
  );
}
