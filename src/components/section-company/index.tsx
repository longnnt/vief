import { Box } from "@chakra-ui/react";
import React from "react";
import Section from "../section";
import SectionCompanyResearch from "./company-research";
import SectionCompanyStory from "./company-story";

export default function SectionCompany() {
  return (
    <Section>
      <SectionCompanyStory />
      <SectionCompanyResearch mt="64px" />
    </Section>
  );
}
