import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ContentItem from "./content-item";

const listEvent = [1, 2, 3, 4];

interface EventContentProps {
  w?: string;
  h?: string;
}

export default function EventContent({ w, h }: EventContentProps) {
  return (
    <Box overflow={"hidden"}>
      <Flex width={"fit-content"}>
        {listEvent.map((event) => (
          <ContentItem key={event} w="384px" mr="32px" />
        ))}
      </Flex>
    </Box>
  );
}
