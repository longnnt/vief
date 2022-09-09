import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { EVENT_DATA } from "./constants";
import EventContentItem from "./EventContentItem";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function SampleNextArrow(props: any) {
  const { onClick } = props;
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
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
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
}

const SliderComingEvent = () => {
  const settings = {
    style: { display: "flex" },
    infinite: true,
    speed: 500,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
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
          {EVENT_DATA.slice(0, 4).map((event, index) => (
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
