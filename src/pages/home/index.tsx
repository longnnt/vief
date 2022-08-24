import About from "@/src/components/homeComponents/about/About";
import Carousel from "@/src/components/homeComponents/carousel/Carousel";

import { Stack } from "@chakra-ui/react";
import React from "react";
import SectionPolicy from "@/src/components/section-policy";
import SectionEvent from "@/src/components/section-event";
import Company from "@/src/components/homeComponents/company/Company";
import Library from "@/src/components/homeComponents/library/Library";
import Subcribe from "@/src/components/homeComponents/subcribe/Subcribe";
import SectionCompany from "@/src/components/section-company";
import Section from "@/src/components/section";

function HomePage() {
  return (
    <>
      <Stack>
        <Carousel />
        <Stack alignSelf="center" py="127.5px" width="1216px" spacing={"136px"}>
          <About></About>
          <SectionPolicy />
          <Section wrapperStyle={{ position: "relative" }}>
            <SectionEvent />
          </Section>
          <SectionCompany />
          <Library />
          <Subcribe />
        </Stack>
      </Stack>
    </>
  );
}

export default HomePage;
