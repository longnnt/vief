import { WebContainer } from "@/src/common/components/WebContainer";
import About from "@/src/components/homeComponents/about/About";
import Carousel from "@/src/components/homeComponents/carousel/Carousel";
import Library from "@/src/components/homeComponents/library/Library";
import Subcribe from "@/src/components/homeComponents/subcribe/Subcribe";
import Section from "@/src/components/section";
import SectionCompany from "@/src/components/section-company";
import SectionEvent from "@/src/components/section-event";
import SectionPolicy from "@/src/components/section-policy";
import { Stack } from "@chakra-ui/react";

function HomePage() {
  return (
    <WebContainer>
      <Stack>
        <Carousel />
        <Stack alignSelf="center" py="127.5px">
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
    </WebContainer>
  );
}

export default HomePage;
