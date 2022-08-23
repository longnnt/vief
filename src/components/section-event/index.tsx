import React from "react";
import Section from "../section";
import SectionHeader from "../section/section-header";
import EventContent from "./event-content";

export default function SectionEvent() {
  return (
    <Section>
      <SectionHeader
        category="Sự kiện"
        title="Sắp diễn ra"
        alignItems="center"
        headingMarginTop="16px"
      />
      <EventContent w="1360px" />
    </Section>
  );
}
