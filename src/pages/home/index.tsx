import { WebContainer } from "@/src/common/components/WebContainer";
import About from "@/src/components/homeComponents/about/About";
import Carousel from "@/src/components/homeComponents/carousel/Carousel";
import { HomePageProps } from "@/src/components/homeComponents/interfaces";
import Library from "@/src/components/homeComponents/library/Library";
import Subcribe from "@/src/components/homeComponents/subcribe/Subcribe";
import SectionCompany from "@/src/components/section-company";
import { EventsHome } from "@/src/components/section-event/EventsHome";
import SectionPolicy from "@/src/components/section-policy";
import { Stack } from "@chakra-ui/react";

function HomePage({ banners }: HomePageProps) {
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

export default HomePage;
