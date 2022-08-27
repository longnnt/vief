import { Stack } from "@chakra-ui/react";
import Title from "../section/components/Title";
import SectionPast from "./section-past";
import SectionUpcoming from "./section-upcoming";

export default function Events() {
  return (
    <>
      <Stack pt="36px" pb="64px">
        <Stack alignSelf="center" width={{ sm: "100%" }} mt="0">
          <Title
            title="Sự kiện"
            wrapperStyle={{ textAlign: "center", mb: "64px" }}
          />
          <SectionUpcoming />
          <SectionPast wrapperStyle={{ mt: { sm: "48px", base: "69px" } }} />
        </Stack>
      </Stack>
    </>
  );
}
