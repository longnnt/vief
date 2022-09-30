import { Box } from "@chakra-ui/react";
import { Event } from "./interface";
import SliderComingEvent from "./SliderComingEvent";
interface SectionEventProps {
  events: Event[];
}

export default function SectionEvent({ events }: SectionEventProps) {
  return (
    <Box py="29px">
      <SliderComingEvent events={events} />
    </Box>
  );
}
