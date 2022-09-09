import { Box, Grid, GridItem } from "@chakra-ui/react";
import EventContentItem from "./EventContentItem";
import SliderComingEvent from "./SliderComingEvent";
import { Event } from "./interface";
interface SectionEventProps {
  upcomingEvents?: Event[];
}

export default function SectionEvent({ upcomingEvents }: SectionEventProps) {
  return (
    <>
      <Box py="29px">
        {/* <Box>
          <ChevronLeft />
        </Box> */}
        {/* <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            xl: "repeat(3, 1fr)",
            "2xl": "repeat(3, 1fr)",
          }}
          gap="8"
        >
          {upcomingEvents?.slice(0, 3).map((event, index) => (
            <GridItem key={index}>
              <EventContentItem event={event} />
            </GridItem>
          ))}
        </Grid> */}
        {/* <Box position={"absolute"} right="-64px" top="52%">
          <ChevronRight />
        </Box> */}
        <SliderComingEvent />
      </Box>
    </>
  );
}
