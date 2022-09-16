import { UnsplashImg } from "@/src/components/aboutComponents/interfaces";
import { Box, Image } from "@chakra-ui/react";

export type ItemImgThumbnail = {
  props: UnsplashImg;
};

export const BottomItem = ({ props }: ItemImgThumbnail) => {
  return (
    <Box w="full" h={{ md: "150px", sm: "100px" }}>
      <Image src={props?.urls?.regular} alt="a" />
    </Box>
  );
};
