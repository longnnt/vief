import { Box, Grid, GridItem } from "@chakra-ui/react";
import EventContentItem from "./EventContentItem";
import { Event } from "./interface";

interface SectionEventProps {
  upcomingData?: Event[];
}

export default function SectionEvent({ upcomingData }: SectionEventProps) {
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
          {upcomingData?.slice(0, 3).map((event, index) => (
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
