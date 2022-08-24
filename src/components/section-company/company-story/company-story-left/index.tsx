import ShortDes from "@/src/components/section/components/ShortDes";
import SectionHeader from "@/src/components/section/section-header";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function CompanyStoryLeft() {
  return (
    <Box>
      <SectionHeader
        category="Chuyện doanh nghiệp"
        title="Câu chuyện"
        heading="IFC phối hợp ngân hàng việt thúc đẩy dự án bảo vệ môi trường"
        wrapperStyle={{
          w: "560px",
          mb: "32px",
        }}
        headingWidth="560px"
      />
      <ShortDes
        shortDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa"
        textWidth="560px"
        textHeight="150px"
      />
    </Box>
  );
}
