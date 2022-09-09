import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Stack,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ItemSlider from "./ItemSlider/ItemSlider";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <IconButton
      display={{ sm: "none", md: "block" }}
      // boxSize={"40px"}
      w="40px"
      aria-label=""
      isRound
      variant={"ghost"}
      border="3px solid #C5CAD3"
      alignSelf={"center"}
      onClick={onClick}
    >
      <ChevronRightIcon boxSize="30px" color="#C5CAD3" />
    </IconButton>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <IconButton
      display={{ sm: "none", md: "block" }}
      w="40px"
      aria-label=""
      isRound
      variant={"ghost"}
      border="3px solid #C5CAD3"
      alignSelf={"center"}
      alignContent={"center"}
      onClick={onClick}
    >
      <ChevronLeftIcon boxSize="30px" color="#C5CAD3" />
    </IconButton>
  );
}

export default function SliderImage() {
  const settingsMd = {
    vertical: false,
    style: { display: "flex" },
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  const settingsSm = {
    centerMode: true,
    centerPadding: "40px",
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Center>
      <Box
        w={{ md: "1330px", sm: "full" }}
        h={{ md: "320px", sm: "189px" }}
        display={{ md: "block", sm: "none" }}
      >
        <Slider {...settingsMd}>
          <ItemSlider></ItemSlider>
          <ItemSlider></ItemSlider>
          <ItemSlider></ItemSlider>
          <ItemSlider></ItemSlider>
          <ItemSlider></ItemSlider>
        </Slider>
      </Box>

      <Box
        w={{ md: "1360px", sm: "375px" }}
        display={{ md: "none", sm: "block" }}
      >
        <Slider {...settingsSm}>
          <ItemSlider></ItemSlider>
          <ItemSlider></ItemSlider>
          <ItemSlider></ItemSlider>
          <ItemSlider></ItemSlider>
          <ItemSlider></ItemSlider>
        </Slider>
      </Box>
    </Center>
  );
}
