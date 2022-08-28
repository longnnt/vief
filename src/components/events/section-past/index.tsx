import { Pagination } from "@/src/common/components/pagination";
import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import Title from "../../section/components/Title";
import ButtonEventComponent from "../components/Button";
import { SectionPastProps } from "../interface";
import SectionContent from "./section-content";

const listEvents = [1, 2, 3, 4, 5, 6];

export default function SectionPast({ wrapperStyle }: SectionPastProps) {
  return (
    <Box {...wrapperStyle}>
      <Title
        isBorderBottom={false}
        wrapperStyle={{ fontSize: "28px", lineHeight: "42px", mb: "32px" }}
        title="Đã diễn ra"
      />
      <ButtonEventComponent btnTitle="Ngành Gỗ" />
      <ButtonEventComponent btnTitle="Ngành khác" />
      <SectionContent />
      <HStack w="full" justifyContent="center">
        <Pagination currentPage={5} totalPages={10} onPageChange={() => {}} />
      </HStack>
    </Box>
  );
}
