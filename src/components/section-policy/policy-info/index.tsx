import { Box } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "../../section/section-header";
import PolicyInfoContent from "./PolicyInfoContent";

export default function PolicyInfo() {
  return (
    <Box>
      <SectionHeader
        category="Chính sách"
        title="Thông tin chính sách"
        heading="Ban hành danh mục lĩnh vực, cơ sở phát thải khí nhà kính phai thực hiện kiểm kê khí nhà kính"
        headingWidth="1008px"
        mb="32px"
      />
      <PolicyInfoContent />
    </Box>
  );
}
