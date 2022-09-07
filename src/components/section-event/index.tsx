import { Box, Grid, GridItem } from "@chakra-ui/react";
import { EVENT_DATA } from "./constants";
import EventContentItem from "./EventContentItem";

interface SectionEventProps {
  UPCOMING_DATA?: [];
}

export default function SectionEvent({ UPCOMING_DATA }: SectionEventProps) {
  return (
    <>
      <Box overflow={"hidden"}>
        {/* <Box>
          <ChevronLeft />
        </Box> */}
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            xl: "repeat(3, 1fr)",
            "2xl": "repeat(3, 1fr)",
          }}
          gap="8"
        >
          {UPCOMING_DATA?.slice(0, 3).map((event, index) => (
            <GridItem key={index}>
              <EventContentItem event={event} />
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
