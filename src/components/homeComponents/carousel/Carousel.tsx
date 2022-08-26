import { Box, Image } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import { PICTURE } from "@/src/common/constants/common.constant";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <Box w="full" backgroundPosition="center">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Image src={PICTURE("0")} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={PICTURE("1")} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={PICTURE("2")} alt="" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
export default Carousel;
