import { Box, Image } from "@chakra-ui/react";

export const ItemPartner = ({ children }: { children: any }) => (
  <Box>
    <Image
      src={children}
      alt=""
      h={{ sm: "40px", md: "64px" }}
      w="auto"
    ></Image>
  </Box>
);
