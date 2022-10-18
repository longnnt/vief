import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import EventContentItem from "./EventContentItem";
import { Event } from "./interface";
import { PrevButton } from "@/src/common/components/button/prevButton";
import { NextButton } from "@/src/common/components/button/nextButton";

type Props = {
  events: Event[];
};
const SliderComingEvent = ({ events }: Props) => {
  const settings = {
    style: { display: "flex" },
    dots: false,
    infinite: true,
    speed: 500,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const lessThanFourEvent = events.length < 4;
  return (
    <Center>
      <Box w="full" display={{ md: lessThanFourEvent ? "none" : "block", sm: "block" }}>
        <Slider {...settings}>
          {events.map((event) => (
            <Box pr={{ md: "32px", sm: "none" }} key={event.id}>
              <EventContentItem event={event} />
            </Box>
          ))}
        </Slider>
      </Box>

      {lessThanFourEvent && (
        <Grid templateColumns={`repeat(3, 1fr)`} gap={6} display={{ md: "grid", sm: "none" }} w="full">
          {events.map((event) => (
            <GridItem key={event.id}>
              <EventContentItem event={event} />
            </GridItem>
          ))}
        </Grid>
      )}
    </Center>
  );
};

export default SliderComingEvent;
