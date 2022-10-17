import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { PARTNER_LOGO } from "../../../constant";

export const ItemPartner = () => {
  return (
    <Stack
      direction="row"
      alignSelf="center"
      flexWrap={{ sm: "wrap", md: "nowrap" }}
      justifyContent="center"
      className="logo-partner"
      spacing={0}
    >
      {PARTNER_LOGO.map((partner, index) => {
        return (
          <Box
            cursor="pointer"
            key={index}
            w={{ md: "220px", sm: "110px" }}
            h={{ sm: "40px", md: "64px" }}
            position="relative"
            flex={index === PARTNER_LOGO.length - 1 ? "1 0 100%" : "none"}
            sx={{
              _hover: {
                img: {
                  filter: "grayscale(1)",
                },
              },
            }}
            mb={{ sm: "24px" }}
            mr={index === 0 ? "16px" : "0"}
          >
            <Image src={partner.url} alt={partner.alt} priority layout="fill" objectFit="contain" />
          </Box>
        );
      })}
    </Stack>
  );
};
