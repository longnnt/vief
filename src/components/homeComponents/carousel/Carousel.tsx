import React from "react";

import { Box, Button, Flex, Image } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

const Carousel = () => {
  return (
    <Box
      w="full"
      h="1000px"
      backgroundPosition="center"
      backgroundSize={"cover"}
    >
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Image src="/bgHome.png"></Image>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </Box>
  );
};
export default Carousel;
