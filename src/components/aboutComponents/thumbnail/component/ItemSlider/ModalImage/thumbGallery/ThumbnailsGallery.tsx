import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Lazy, Navigation, Thumbs } from "swiper";
import { Box, Image, Stack } from "@chakra-ui/react";

export default function ThumbnailGallery() {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  const handleSwiper = (e: any) => {
    setThumbsSwiper(e);
  };

  return (
    <Stack spacing={30}>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Box w="full" h="500px">
            <Image src="/bgHome.png" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full" h="500px">
            <Image src="/articleCsIMG.png" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full" h="500px">
            <Image src="/company-research.png" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full" h="500px">
            <Image src="/policy-info.png" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="full" h="500px">
            <Image src="/company-story.png" />
          </Box>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={handleSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Lazy]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box w="500px" h="200px">
            <Image src="/bgHome.png" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="500px" h="200px">
            <Image src="/articleCsIMG.png" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="500px" h="200px">
            <Image src="/company-research.png" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="500px" h="200px">
            <Image src="/policy-info.png" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w="500px" h="200px">
            <Image src="/company-story.png" />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Stack>
  );
}
