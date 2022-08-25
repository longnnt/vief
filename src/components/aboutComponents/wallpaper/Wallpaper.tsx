import { Box, Center, Image } from "@chakra-ui/react";

const Wallpaper = () => {
  return (
    <>
      <Center>
        <Box w="full" h={{ md: "650px", sm: "240px" }}>
          <Image src="/vief-about.png" w="100%" h="100%"></Image>
        </Box>
      </Center>
    </>
  );
};

export default Wallpaper;
