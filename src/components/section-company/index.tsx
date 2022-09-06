import { Box, Stack } from "@chakra-ui/react";
import SectionCompanyResearch from "./company-research";
import SectionCompanyStory from "./company-story";

export default function SectionCompany() {
  return (
    <Stack spacing={"64px"}>
      <SectionCompanyStory />
      <SectionCompanyResearch />
    </Stack>
  );
}
