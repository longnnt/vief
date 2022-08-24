import { Box } from "@chakra-ui/react";
import React from "react";
import ShortDes from "../../section/components/ShortDes";
import SectionHeader from "../../section/section-header";

export default function PolicyUpdateRight() {
  return (
    <Box h="350px">
      <SectionHeader
        category="Chính sách"
        title="Mới cập nhật"
        wrapperStyle={{ w: "560px" }}
        heading="Cop26 và dấu ấn Việt Nam"
      />
      <ShortDes
        shortDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa"
        textWidth="560px"
        textHeight="150px"
        wrapperStyle={{ mt: "32px" }}
      />
    </Box>
  );
}
