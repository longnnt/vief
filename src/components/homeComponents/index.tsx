import { WebContainer } from "@/src/common/components/WebContainer";
import { Stack } from "@chakra-ui/react";
import SectionCompany from "../section-company";
import { EventsHome } from "../section-event/EventsHome";
import SectionPolicy from "../section-policy";
import SectionAbout from "./about";
import Carousel from "./carousel/Carousel";
import { HomePageProps } from "./interfaces";
import SectionLibrary from "./library";
import Subcribe from "./subcribe/Subcribe";

function Home({ banners }: HomePageProps) {
  return (
    <Stack>
      <Carousel banners={banners} />
      <WebContainer>
        <Stack
          alignSelf="center"
          py={{ sm: "48px", xl: "128px" }}
          spacing={{ sm: "48px", xl: "128px", "2xl": "128px" }}
        >
          <SectionAbout />
          <SectionPolicy />
          <EventsHome />
          <SectionCompany />
          <SectionLibrary />
          <Subcribe />
        </Stack>
      </WebContainer>
    </Stack>
  );
}

export { Home };
