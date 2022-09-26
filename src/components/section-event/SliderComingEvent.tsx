import { Box, Center, Grid, IconButton } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import EventContentItem from "./EventContentItem";
import { Event } from "./interface";

type ArrowButtonType = {
  onClick?: () => void;
};

const NextArrow = ({ onClick }: ArrowButtonType) => {
  return (
    <IconButton
      boxSize={"40px"}
      aria-label=""
      isRound
      variant={"ghost"}
      border="3px solid #C5CAD3"
      alignSelf={"center"}
      onClick={onClick}
      position={{ "2xl": "absolute" }}
      right="-38px"
      top="46%"
    >
      <ChevronRightIcon boxSize="40px" color="#C5CAD3" />
    </IconButton>
  );
};

const PrevArrow = ({ onClick }: ArrowButtonType) => {
  return (
    <IconButton
      mr="32px"
      boxSize={"40px"}
      aria-label=""
      isRound
      variant={"ghost"}
      border="3px solid #C5CAD3"
      alignSelf={"center"}
      onClick={onClick}
      position={{ "2xl": "absolute" }}
      left="-70px"
      top="46%"
    >
      <ChevronLeftIcon boxSize="40px" color="#C5CAD3" />
    </IconButton>
  );
};

type Props = {
  events: Event[];
};
const SliderComingEvent = ({ events }: Props) => {
  const settings = {
    style: { display: "flex" },
    infinite: true,
    speed: 500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
      <Box w="full">
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
