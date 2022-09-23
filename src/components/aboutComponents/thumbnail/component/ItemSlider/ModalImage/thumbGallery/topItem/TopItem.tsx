import { UnsplashImg } from "@/src/components/aboutComponents/interfaces";
import { Box, Center, Image, Stack, VStack } from "@chakra-ui/react";

export type ItemImgThumbnail = {
  props: UnsplashImg;
};

export const TopItem = ({ props }: ItemImgThumbnail) => {
  return (
    <Box
      h={{ md: "672.5px", sm: "200px" }}
      w="full"
      bg="transparent"
      borderRadius="8px"
    >
      <Image src={props?.urls?.regular} alt="" />
    </Box>
  );
};
