import About from "@/src/components/homeComponents/about/About";
import Carousel from "@/src/components/homeComponents/carousel/Carousel";
import Company from "@/src/components/homeComponents/company/Company";
import Events from "@/src/components/homeComponents/event/Events";
import Library from "@/src/components/homeComponents/library/Library";
import Subcribe from "@/src/components/homeComponents/subcribe/Subcribe";

import { Stack } from "@chakra-ui/react";
import React from "react";

function HomePage() {
  return (
    <>
      <Stack>
        <Carousel />
        <Stack padding="128px 18%" spacing={"136px"}>
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
