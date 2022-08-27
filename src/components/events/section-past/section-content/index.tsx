import { Flex } from "@chakra-ui/react";
import React from "react";
import SectionContentItem from "./section-content-item";

const list = [1, 2, 3, 4, 5, 6];

export default function SectionContent() {
  return (
    <Flex
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      mt={"32px"}
      w={{ sm: "100%", xl: "1204px", "2xl": "1216px" }}
      flexDirection={{ sm: "column", xl: "row", "2xl": "row" }}
    >
      {list.map((event) => (
        <SectionContentItem key={event} />
      ))}
    </Flex>
  );
}
