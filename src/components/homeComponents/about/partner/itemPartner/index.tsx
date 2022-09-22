import { Box, Image, Stack } from "@chakra-ui/react";

import React from "react";
import {
  imgIced,
  imgIcedHover,
  imgTheAsia,
  imgTheAsiaHover,
  imgUsaid,
  imgUsaidHover,
} from "../../../constant";

export const ItemPartner = () => {
  const [usaid, setUsaid] = React.useState(imgUsaid);
  const [iced, setIced] = React.useState(imgIced);
  const [theAsia, setTheAsia] = React.useState(imgTheAsia);

  return (
    <>
      <Stack
        direction="row"
        spacing={{ md: "64px", sm: "16px" }}
        alignSelf="center"
      >
        <Box>
          <Image
            style={{ content: iced }}
            h={{ sm: "40px", md: "64px" }}
            onMouseEnter={() => setIced(imgIcedHover)}
            onMouseLeave={() => setIced(imgIced)}
          />
        </Box>
        <Box>
          <Image
            style={{ content: usaid }}
            h={{ sm: "40px", md: "64px" }}
            transitionDuration="0.2s"
            onMouseEnter={() => setUsaid(imgUsaidHover)}
            onMouseLeave={() => setUsaid(imgUsaid)}
          />
        </Box>
      </Stack>
      <Box>
        <Image
          style={{ content: theAsia }}
          h={{ sm: "40px", md: "64px" }}
          onMouseEnter={() => setTheAsia(imgTheAsiaHover)}
          onMouseLeave={() => setTheAsia(imgTheAsia)}
        />
      </Box>
    </>
  );
};
