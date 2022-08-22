import { Box } from "@chakra-ui/react";
import React from "react";
import SectionCompanyResearch from "./company-research";
import SectionCompanyStory from "./company-story";

export default function SectionCompany() {
  return (
    <Box>
      <SectionCompanyStory />
      <SectionCompanyResearch mt="64px" />
    </Box>
  );
}
