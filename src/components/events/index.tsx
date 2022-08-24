import React from "react";
import Section from "../section";
import Title from "../section/components/Title";
import SectionPast from "./section-past";
import SectionUpcoming from "./section-upcoming";

export default function Events() {
  return (
    <>
      <Section wrapperStyle={{ mt: "36px", position: "relative" }}>
        <Title
          title="Sự kiện"
          wrapperStyle={{ textAlign: "center", m: "0 auto", mb: "64px" }}
        />
        <SectionUpcoming />
      </Section>
      <Section wrapperStyle={{ mt: "64px" }}>
        <SectionPast wrapperStyle={{ mt: "69px" }} />
      </Section>
    </>
  );
}
