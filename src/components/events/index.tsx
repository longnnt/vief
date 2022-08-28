import { Stack, Text } from "@chakra-ui/react";
import SectionPast from "./section-past";
import SectionUpcoming from "./section-upcoming";

export default function Events() {
  return (
    <>
      <Stack pt="36px" pb="64px">
        <Stack alignSelf="center" width={{ sm: "100%" }} mt="0">
          <Text
            variant="text20"
            borderBottom="1.5px solid #394160"
            w="fit-content"
            m="auto"
            my="32px"
          >
            Sự kiện
          </Text>
          <SectionUpcoming />
          <SectionPast />
        </Stack>
      </Stack>
    </>
  );
}
