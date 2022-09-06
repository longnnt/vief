import { Box, Image, Stack, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Banner } from "../interfaces";

type CarouselProps = {
  banners: Banner[];
};
const Carousel = ({ banners }: CarouselProps) => {
  console.log({ banners });

  return (
    <Box
      w="full"
      backgroundPosition="center"
      h={{
        md: "calc(100vh - 96px)",
        sm: "calc(100vh - 66px)",
      }}
    >
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Box w="full" h="full" position="relative">
              <a href={banner.link} target="_blank" rel="noreferrer">
                <Image
                  src={banner.image.url}
                  alt=""
                  objectFit="cover"
                  w="full"
                  h="full"
                />
              </a>
              <Stack
                position="absolute"
                top="100"
                left="50%"
                alignItems="start"
              >
                <Text variant="text28">{banner.translates[0].title}</Text>
                <Text
                  variant="text36"
                  fontSize="80px"
                  color="green.primary"
                  lineHeight="100%"
                >
                  {banner.translates[0].subTitle}
                </Text>
                <Text
                  textAlign="left"
                  variant="text14"
                  maxW="500px"
                  className="text-4-line"
                  dangerouslySetInnerHTML={{
                    __html: banner.translates[0].shortDesc,
                  }}
                />
              </Stack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default Carousel;
