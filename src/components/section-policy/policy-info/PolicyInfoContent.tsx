import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import ShortDes from "../../section/components/ShortDes";

export default function PolicyInfoContent() {
  return (
    <Flex alignItems={"center"} justifyContent="space-between">
      <ShortDes
        shortDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus"
        w="384px"
        h="368px"
        textWidth="352px"
        textHeight="300px"
      />
      <Image src="./policy-info.png" alt="" borderRadius={"10px"} />
    </Flex>
  );
}
