import About from "@/src/components/homeComponents/about/About";
import Carousel from "@/src/components/homeComponents/carousel/Carousel";
import SectionCompany from "@/src/components/section-company";
import SectionEvent from "@/src/components/section-event";
import SectionPolicy from "@/src/components/section-policy";

import { Box, Stack } from "@chakra-ui/react";
import React from "react";

function HomePage() {
  return (
    <Box>
      <Carousel />
      <Box>
        <About />
        <SectionPolicy />
        <SectionEvent />
        <SectionCompany />
      </Box>
    </Box>
  );
}

export default HomePage;
