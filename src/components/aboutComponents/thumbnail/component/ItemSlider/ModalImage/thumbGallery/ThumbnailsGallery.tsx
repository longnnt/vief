import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// import required modules
import { FreeMode, Lazy, Navigation, Thumbs } from "swiper";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { TopItem } from "./topItem/TopItem";
import { BottomItem } from "./bottomItem/BottomItem";

import { ThumbnailItemProp } from "@/src/components/aboutComponents/interfaces";
import { CloseIcon } from "@chakra-ui/icons";

export const ThumbnailGallery = ({ listImgThumb }: ThumbnailItemProp) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const handleSwiper = (e: any) => {
    setThumbsSwiper(e);
  };

  return (
    <Stack
      w="85%"
      direction={"column"}
      spacing={{ md: "64px", sm: "32px" }}
      alignSelf={"center"}
    >
      <Stack bg="transparent" direction={"row"} w="full" alignSelf="center">
        <Stack w="100%" px="20%">
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Lazy]}
            className={"swiperSlides"}
          >
            {listImgThumb?.map((item, index) => (
              <SwiperSlide key={index} className={"swiperSlides"}>
                <TopItem props={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Stack>
      <Stack w="100%" alignSelf={"center"}>
        <Swiper
          onSwiper={handleSwiper}
          loop={true}
          spaceBetween={32}
          slidesPerView={8}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Lazy]}
        >
          {listImgThumb?.map((item, index) => (
            <SwiperSlide key={index} style={{ borderRadius: "8px" }}>
              <BottomItem props={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Stack>
  );
};
