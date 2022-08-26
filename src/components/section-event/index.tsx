import { Box, Grid, GridItem } from "@chakra-ui/react";
import SectionHeader from "../section/section-header";
import EventContentItem from "./EventContentItem";

const listEvents = [1, 2, 3];

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
        {/* <Box>
          <ChevronLeft />
        </Box> */}
        <Grid templateColumns={"repeat(3, 1fr)"} gap="10">
          {listEvents.map((event, index) => (
            <GridItem key={index}>
              <EventContentItem key={event} />
            </GridItem>
          ))}
        </Grid>
        {/* <Box position={"absolute"} right="-64px" top="52%">
          <ChevronRight />
        </Box> */}
      </Box>
    </>
  );
}
