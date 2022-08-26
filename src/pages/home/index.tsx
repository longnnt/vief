import { WebContainer } from "@/src/common/components/WebContainer";
import About from "@/src/components/homeComponents/about/About";
import Carousel from "@/src/components/homeComponents/carousel/Carousel";
import Library from "@/src/components/homeComponents/library/Library";
import Subcribe from "@/src/components/homeComponents/subcribe/Subcribe";
import SectionCompany from "@/src/components/section-company";
import SectionEvent from "@/src/components/section-event";
import { EventsHome } from "@/src/components/section-event/EventsHome";
import SectionPolicy from "@/src/components/section-policy";
import { Stack } from "@chakra-ui/react";

function HomePage() {
  return (
    <Stack>
      <Carousel />
      <WebContainer>
        <Stack alignSelf="center" py="127.5px" spacing={"128px"}>
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
