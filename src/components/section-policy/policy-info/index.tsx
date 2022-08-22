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
        heading="BAN HÀNH DANH MỤC LĨNH VỰC,
          CƠ SỞ PHÁT THẢI KHÍ NHÀ KÍNH PHẢI THỰC HIỆN KIỂM KÊ KHÍ NHÀ KÍNH"
        headingWidth="1008px"
        headingHeight="186px"
        mb="32px"
      />
      <PolicyInfoContent />
    </Box>
  );
}
