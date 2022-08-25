import { Box, Button, Center, Flex, IconButton, Image } from "@chakra-ui/react";
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
      boxSize={"40px"}
      aria-label=""
      isRound
      variant={"ghost"}
      border="3px solid #C5CAD3"
      alignSelf={"center"}
      onClick={onClick}
      ml="20px"
    >
      <ChevronRightIcon boxSize="40px" color="#C5CAD3" />
    </IconButton>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <IconButton
      mr="20px"
      boxSize={"40px"}
      aria-label=""
      isRound
      variant={"ghost"}
      border="3px solid #C5CAD3"
      alignSelf={"center"}
      onClick={onClick}
    >
      <ChevronLeftIcon boxSize="40px" color="#C5CAD3" />
    </IconButton>
  );
}

export default function SliderImage() {
  const settingsMd = {
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
        w={{ md: "1360px", sm: "375px" }}
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
