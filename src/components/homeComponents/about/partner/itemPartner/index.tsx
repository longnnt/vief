import { Box, Stack } from "@chakra-ui/react";
import Image from "next/image";

import React, { useState } from "react";
import { imgIced, imgIcedHover, imgTheAsia, imgTheAsiaHover, imgUsaid, imgUsaidHover } from "../../../constant";

export const ItemPartner = () => {
  const [isHovering, setIsHovered] = React.useState(false);
  return (
    <>
      <Stack direction="row" spacing={{ md: "64px", sm: "16px" }} alignSelf="center" alignItems={"center"}>
        <Box
          w={{ sm: "88.8px", md: "124.32px" }}
          height={{ sm: "40px", md: "56px" }}
          position={"relative"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image loading="lazy" src={isHovering == true ? imgIcedHover : imgIced} layout="fill" objectFit="contain" />
        </Box>
        <Box
          w={{ sm: "140.7px", md: "197px" }}
          height={{ sm: "40px", md: "56px" }}
          position={"relative"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image loading="lazy" src={isHovering == true ? imgUsaidHover : imgUsaid} layout="fill" objectFit="contain" />
        </Box>
      </Stack>
      <Box
        w={{ sm: "287.5px", md: "402.5px" }}
        height={{ sm: "40px", md: "56px" }}
        pos="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          loading="lazy"
          src={isHovering == true ? imgTheAsiaHover : imgTheAsia}
          layout="fill"
          objectFit="contain"
        />
      </Box>
    </>
  );
};
