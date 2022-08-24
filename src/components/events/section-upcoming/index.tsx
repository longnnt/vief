import React from "react";
import SectionEvent from "../../section-event";
import Title from "../../section/components/Title";

export default function SectionUpcoming() {
  return (
    <>
      <Title
        title="Sắp diễn ra"
        isBorderBottom={false}
        wrapperStyle={{ fontSize: "28px", lineHeight: "42px", mb: "32px" }}
      />
      <SectionEvent isSectionHeader={false} />
    </>
  );
}
