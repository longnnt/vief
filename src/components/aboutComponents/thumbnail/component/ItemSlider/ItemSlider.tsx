import { Box, Image } from "@chakra-ui/react";

const ItemSlider = () => {
  return (
    <>
      <Box
        w={{ md: "345px", sm: "252px" }}
        h={{ md: "228px", sm: "189px" }}
        padding="10px"
      >
        <Image
          position="relative"
          borderRadius="8px"
          h="100%"
          alt=""
          transitionDuration="0.2s"
          src="/bgHome.png"
          objectFit="cover"
          _hover={{ transform: "scale(1.05)" }}
        ></Image>
      </Box>
    </>
  );
};

export default ItemSlider;
