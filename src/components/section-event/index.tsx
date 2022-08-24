import ChevronLeft from "@/src/Images/Icons/ChevronLeft";
import ChevronRight from "@/src/Images/Icons/ChevronRight";
import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import Section from "../section";
import SectionHeader from "../section/section-header";
import EventContentItem from "./EventContentItem";

const listEvents = [1, 2, 3, 4];

interface SectionEventProps {
  isSectionHeader?: boolean;
}

export default function SectionEvent({
  isSectionHeader = true,
}: SectionEventProps) {
  return (
    <>
      {isSectionHeader && (
        <SectionHeader
          category="Sự kiện"
          title="Sắp diễn ra"
          alignItems="center"
          wrapperStyle={{ mb: "18px" }}
        />
      )}
      <Box overflow={"hidden"}>
        <Box position={"absolute"} left="-64px" top="52%">
          <ChevronLeft />
        </Box>
        <Flex width={"fit-content"}>
          {listEvents.map((event) => (
            <EventContentItem
              key={event}
              wrapperStyle={{ w: "384px", mr: "32px" }}
            />
          ))}
        </Flex>
        <Box position={"absolute"} right="-64px" top="52%">
          <ChevronRight />
        </Box>
      </Box>
    </>
  );
}
