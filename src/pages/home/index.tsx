import About from "@/src/components/homeComponents/about/About";
import Carousel from "@/src/components/homeComponents/carousel/Carousel";
import Company from "@/src/components/homeComponents/company/Company";
import Events from "@/src/components/homeComponents/event/Events";

import { Stack } from "@chakra-ui/react";
import React from "react";

function HomePage() {
  return (
    <>
      <Stack>
        <Carousel />
        <Stack padding="128px 352px" spacing={"100px"}>
          <About></About>
          <Events></Events>
          <Company></Company>
        </Stack>
      </Stack>
    </>
  );
}

export default HomePage;
