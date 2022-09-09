import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Lazy, Navigation, Thumbs } from "swiper";
import { Stack } from "@chakra-ui/react";
import { TopItem } from "./topItem/TopItem";
import { BottomItem } from "./bottomItem/BottomItem";
import { DATA_IMG } from "@/src/components/aboutComponents/contants";

export default function ThumbnailGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
        {DATA_IMG.map((item, index) => (
          <SwiperSlide key={index}>
            <TopItem props={item} />
          </SwiperSlide>
        ))}
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
        {DATA_IMG.map((item, index) => (
          <SwiperSlide key={index}>
            <BottomItem props={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
}
