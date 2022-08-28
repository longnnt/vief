import { Box, Button, Center, Flex, IconButton, Image } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticleItemSlide from "./articleItemSlide/ArticleItemSlide";

export default function ArticleSlide() {
  const settingsMd = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settingsSm = {
    autoPlay: true,
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Center>
      <Box
        w={{ md: "1216px", sm: "343px" }}
        display={{ md: "block", sm: "none" }}
      >
        <Slider {...settingsMd}>
          <ArticleItemSlide />
          <ArticleItemSlide />
          <ArticleItemSlide />
        </Slider>
      </Box>

      <Box w={{ sm: "343px" }} display={{ md: "none", sm: "block" }}>
        <Slider {...settingsSm}>
          <ArticleItemSlide />
          <ArticleItemSlide />
          <ArticleItemSlide />
        </Slider>
      </Box>
    </Center>
  );
}
