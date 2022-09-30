import { Box, Center, Grid, IconButton } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Center>
      <Box w="full" pos={"relative"}>
        <Slider {...settings}>
          {events.map((event, index) => (
            <Grid pr="32px" key={index}>
              <EventContentItem event={event} />
            </Grid>
          ))}
        </Slider>
      </Box>
    </Center>
  );
};

export default SliderComingEvent;
