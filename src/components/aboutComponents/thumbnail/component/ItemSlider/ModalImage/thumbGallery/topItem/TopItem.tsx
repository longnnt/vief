import { UnsplashImg } from "@/src/components/aboutComponents/interfaces";
import { Box, Image } from "@chakra-ui/react";

export type ItemImgThumbnail = {
  props: UnsplashImg;
};

export const TopItem = ({ props }: ItemImgThumbnail) => {
  return (
    <Box w="full" h={{ sm: "200px", md: "500px" }}>
      <Image src={props?.urls?.regular} alt="a" />
    </Box>
  );
};
