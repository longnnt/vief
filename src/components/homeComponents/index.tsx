import { WebContainer } from "@/src/common/components/WebContainer";
import About from "@/src/pages/about";
import Library from "@/src/pages/library";
import { Stack } from "@chakra-ui/react";
import React from "react";
import SectionCompany from "../section-company";
import { EventsHome } from "../section-event/EventsHome";
import SectionPolicy from "../section-policy";
import Carousel from "./carousel/Carousel";
import { HomePageProps } from "./interfaces";
import Subcribe from "./subcribe/Subcribe";

function Home({ banners }: HomePageProps) {
  return (
    <Stack>
      <Carousel banners={banners} />
      <WebContainer>
        <Stack
          alignSelf="center"
          py={{ sm: "48px", xl: "127.5px", "2xl": "127.5px" }}
          spacing={{ sm: "48px", xl: "128px", "2xl": "128px" }}
        >
          <About />
          <SectionPolicy />
          <EventsHome />
          <SectionCompany />
          <Library />
          <Subcribe />
        </Stack>
      </WebContainer>
    </Stack>
  );
}

export { Home };
