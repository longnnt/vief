import { Box, Image } from "@chakra-ui/react";

export const TopItem = ({ props }: any) => {
  return (
    <Box w="full" h="500px">
      <Image src={props.url} alt="a" />
    </Box>
  );
};
