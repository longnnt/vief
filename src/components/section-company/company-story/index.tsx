import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import ShortDes from "../../section/components/ShortDes";
import SectionHeader from "../../section/section-header";
import CompanyStoryLeft from "./company-story-left";

export default function SectionCompanyStory() {
  return (
    <Flex justifyContent={"space-between"}>
      <CompanyStoryLeft />
      <Image src="./company-story.png" alt="" w={"592px"} h="444px" />
    </Flex>
  );
}
