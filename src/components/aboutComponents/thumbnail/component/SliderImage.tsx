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

import { ListImgProps } from "../../interfaces";

function SampleNextArrow(props: any) {
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

export default function SliderImage({ listImg, listImgThumb }: ListImgProps) {
  const settingsMd = {
    vertical: false,
    style: { display: "flex" },
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1200, // width to change options
        settings: {
          vertical: false,
          style: { display: "flex" },
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: <SamplePrevArrow />,
          nextArrow: <SampleNextArrow />,
        },
      },
      {
        breakpoint: 1024, // width to change options
        settings: {
          centerMode: true,
          centerPadding: "40px",
          infinite: true,
          dots: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // width to change options
        settings: {
          centerMode: true,
          centerPadding: "40px",
          infinite: true,
          dots: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400, // width to change options
        settings: {
          centerMode: true,
          centerPadding: "40px",
          infinite: true,
          dots: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Center>
      <Box w={{ md: "1330px", sm: "full" }} h={{ md: "320px", sm: "189px" }}>
        <Slider {...settingsMd}>
          {listImg.map((img, index) => (
            <ItemSlider itemImg={img} listImgThumb={listImgThumb} key={index} />
          ))}
        </Slider>
      </Box>
    </Center>
  );
}
