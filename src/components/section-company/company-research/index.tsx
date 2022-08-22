import { Box } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "../../section/section-header";
import CompanyResearchContent from "./company-research-content";

interface SectionCompanyResearchProps {
  mt?: string;
}

export default function SectionCompanyResearch({
  mt,
}: SectionCompanyResearchProps) {
  return (
    <Box mt={mt}>
      <SectionHeader
        category="Chuyện doanh nghiệp"
        title="Nghiên cứu điển hình"
        heading="Đề xuất các nhóm giải pháp ngoài lâm nghiệp nhằm giảm phát thải khí nhà kính"
        headingWidth="1007px"
        headingHeight="186px"
        isReverse={true}
      />
      <CompanyResearchContent mt={"32px"} />
    </Box>
  );
}
