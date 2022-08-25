import { Stack } from "@chakra-ui/react";
import React from "react";
import Section from "../section";
import Title from "../section/components/Title";
import SectionPast from "./section-past";
import SectionUpcoming from "./section-upcoming";

export default function Events() {
  return (
    <>
      <Stack>
        <Stack
          alignSelf="center"
          w={{ xl: "1200px", "2xl": "1216px" }}
          ml={{ xl: "116px", "2xl": 0 }}
        >
          <Section
            wrapperStyle={{
              mt: "36px",
              position: "relative",
              ml: "0px",
              w: { xl: "1100px", "2xl": "1216px" },
            }}
          >
            <Title
              title="Sự kiện"
              wrapperStyle={{ textAlign: "center", m: "0 auto", mb: "64px" }}
            />
            <SectionUpcoming />
          </Section>
          <Section wrapperStyle={{ mt: "64px" }}>
            <SectionPast wrapperStyle={{ mt: "69px" }} />
          </Section>
        </Stack>
      </Stack>
    </>
  );
}
