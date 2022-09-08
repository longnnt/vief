import { Box, Image } from "@chakra-ui/react";

export const BottomItem = ({ props }: any) => {
  return (
    <Box w="full" h="150px">
      <Image src={props.url} alt="a" />
    </Box>
  );
};
