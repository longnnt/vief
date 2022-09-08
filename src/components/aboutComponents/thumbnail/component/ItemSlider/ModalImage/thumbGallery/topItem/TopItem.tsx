import { Box, Image } from "@chakra-ui/react";

export const TopItem = ({ props }: any) => {
  return (
    <Box w="full" h={{ sm: "200px", md: "500px" }}>
      <Image src={props.url} alt="a" />
    </Box>
  );
};
