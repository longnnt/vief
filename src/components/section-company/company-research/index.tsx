import { Box, ChakraProps } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "../../section/section-header";
import { SectionCompanyResearchProps } from "../interface";
import CompanyResearchContent from "./company-research-content";

export default function SectionCompanyResearch({
  wrapperStyle,
}: SectionCompanyResearchProps) {
  return (
    <Box {...wrapperStyle}>
      <SectionHeader
        category="Chuyện doanh nghiệp"
        title="Nghiên cứu điển hình"
        heading="Đề xuất các nhóm giải pháp ngoài lâm nghiệp nhằm giảm phát thải khí nhà kính"
        headingWidth="1007px"
        isReverse={true}
      />
      <CompanyResearchContent wrapperStyle={{ mt: "32px" }} />
    </Box>
  );
}
