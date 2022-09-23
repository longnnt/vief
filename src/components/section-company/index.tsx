import { Box, Stack } from "@chakra-ui/react";
import SectionCompanyResearch from "./company-research";
import SectionCompanyStory from "./company-story";

export default function SectionCompany() {
  return (
    <Stack spacing={{ md: "64px", sm: "48px" }}>
      <SectionCompanyStory />
      <SectionCompanyResearch />
    </Stack>
  );
}
