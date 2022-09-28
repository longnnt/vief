import { Box, Center, IconButton } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ItemSliderMaster from "./itemSliderMaster";
import { ThumbnailItemProp } from "../../interfaces";

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
      role={"group"}
      _hover={{ bg: "blue.primary", border: "none" }}
    >
      <ChevronRightIcon boxSize="30px" color="#C5CAD3" _groupHover={{ color: "white" }} role={"group"} />
    </IconButton>
  );
}

function SamplePrevArrow(props: any) {
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
      role={"group"}
      _hover={{ bg: "blue.primary", border: "none" }}
    >
      <ChevronLeftIcon boxSize="30px" color="#C5CAD3" _groupHover={{ color: "white" }} role={"group"} />
    </IconButton>
  );
}

export default function SliderMaster({ listImgThumb }: ThumbnailItemProp) {
  const settingsMd = {
    style: { display: "flex" },
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1200, // width to change options
        settings: {
          style: { display: "flex" },
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: <SamplePrevArrow />,
          nextArrow: <SampleNextArrow />,
        },
      },

      {
        breakpoint: 800, // width to change options
        settings: {
          style: { display: "flex" },
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: <SamplePrevArrow />,
          nextArrow: <SampleNextArrow />,
        },
      },
      {
        breakpoint: 400, // width to change options
        settings: {
          style: { display: "flex" },
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: <SamplePrevArrow />,
          nextArrow: <SampleNextArrow />,
        },
      },
    ],
  };
  return (
    <Center>
      <Box w={{ md: "1330px", sm: "full" }} h={{ md: "320px", sm: "189px" }}>
        <Slider {...settingsMd}>
          {listImgThumb.map((img, index) => (
            <ItemSliderMaster itemImg={img} key={index} />
          ))}
        </Slider>
      </Box>
    </Center>
  );
}
