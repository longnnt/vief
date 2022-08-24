import LeftArrow from "@/src/Images/Icons/LeftArrow";
import RightArrow from "@/src/Images/Icons/RightArrow";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const listPage = [1, 2, 3];

export default function Pagination() {
  return (
    <Flex justifyContent={"center"} textAlign="center" alignItems={"center"}>
      <Flex justifyContent={"center"} alignItems={"center"} w={"24px"} h="24px">
        <LeftArrow />
      </Flex>
      {listPage.map((num) => (
        <Box
          key={num}
          w={"24px"}
          h="24px"
          mx="8px"
          backgroundColor={num === 2 ? "blue.primary" : "white"}
          color={num === 2 ? "white" : "white.100"}
          borderRadius="4px"
          cursor={"pointer"}
        >
          {num}
        </Box>
      ))}
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        w={"24px"}
        h="24px"
        mx="8px"
      >
        <RightArrow />
      </Flex>
    </Flex>
  );
}
