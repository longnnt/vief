import { Stack } from "@chakra-ui/react";
import Title from "../section/components/Title";
import SectionPast from "./section-past";
import SectionUpcoming from "./section-upcoming";

export default function Events() {
  return (
    <>
      <Stack>
        <Stack alignSelf="center">
          <Title
            title="Sự kiện"
            wrapperStyle={{ textAlign: "center", m: "0 auto", mb: "64px" }}
          />
          <SectionUpcoming />
          <SectionPast wrapperStyle={{ mt: "69px" }} />
        </Stack>
      </Stack>
    </>
  );
}
