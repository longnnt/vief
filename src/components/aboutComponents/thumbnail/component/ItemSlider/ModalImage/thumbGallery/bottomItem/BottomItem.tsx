import { Box, Image } from "@chakra-ui/react";

export const BottomItem = ({ props }: any) => {
  return (
    <Box w="full" h={{ md: "150px", sm: "100px" }}>
      <Image src={props.urls.regular} alt="a" />
    </Box>
  );
};
