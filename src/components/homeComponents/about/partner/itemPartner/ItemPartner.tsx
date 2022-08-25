import { Box, Image, Link } from "@chakra-ui/react";
import { ReactNode } from "react";

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
