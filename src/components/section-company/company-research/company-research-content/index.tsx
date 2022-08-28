import ShortDes from "@/src/components/section/components/ShortDes";
import { Flex, Image } from "@chakra-ui/react";
import { CompanyResearchContentProps } from "../../interface";

export default function CompanyResearchContent({
  wrapperStyle,
}: CompanyResearchContentProps) {
  return (
    <Flex justifyContent={"space-between"} {...wrapperStyle}>
      <Image src="./company-research.png" alt="" borderRadius={"10px"} />
      <ShortDes
        shortDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus"
        textWidth="352px"
        textHeight="300px"
      />
    </Flex>
  );
}
