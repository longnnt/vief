import { Stack } from "@chakra-ui/react";
import WeAre from "@/src/components/aboutComponents/WeAre/WeAre";
import Wallpaper from "@/src/components/aboutComponents/wallpaper/Wallpaper";
import Thumbnail from "@/src/components/aboutComponents/thumbnail/Thumbnail";
import Master from "@/src/components/aboutComponents/master/Master";
import Contact from "@/src/components/aboutComponents/contact/Contact";
import { WebContainer } from "@/src/common/components/WebContainer";

export const About = () => {
  return (
    <>
      <WebContainer>
        <Stack py="64px" spacing="64px" pt={{ md: "64px", sm: "32px" }}>
          <WeAre />
        </Stack>
      </WebContainer>
      <Wallpaper />
      <Stack py="64px" spacing="64px" pt={{ md: "64px", sm: "32px" }}>
        <Thumbnail />
        <Master />
      </Stack>
      <WebContainer>
        <Stack py="64px" spacing="64px" pt={{ md: "64px", sm: "32px" }}>
          <Contact />
        </Stack>
      </WebContainer>
    </>
  );
};
