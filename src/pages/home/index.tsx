import About from "@/src/components/homeComponents/about/About";
import Carousel from "@/src/components/homeComponents/carousel/Carousel";
import Company from "@/src/components/homeComponents/company/Company";
import Events from "@/src/components/homeComponents/event/Events";
import Library from "@/src/components/homeComponents/library/Library";
import Subcribe from "@/src/components/homeComponents/subcribe/Subcribe";

import { Box, Center, Stack } from "@chakra-ui/react";
import React from "react";

function HomePage() {
  return (
    <>
      <Stack>
        <Carousel />
        <Stack alignSelf="center" py="127.5px" width="1216px" spacing={"128px"}>
          <About></About>
          <Events></Events>
          <Company></Company>
          <Library></Library>
          <Subcribe></Subcribe>
        </Stack>
      </Stack>
    </>
  );
}

export default HomePage;
