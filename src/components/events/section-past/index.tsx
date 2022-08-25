import { Box } from "@chakra-ui/react";
import React from "react";
import Title from "../../section/components/Title";
import ButtonEventComponent from "../components/Button";
import Pagination from "../components/Pagination";
import { SectionPastProps } from "../interface";
import SectionContent from "./section-content";

const listEvents = [1, 2, 3, 4, 5, 6];

export default function SectionPast({ wrapperStyle }: SectionPastProps) {
  return (
    <Box {...wrapperStyle} mb={"64px"}>
      <Title
        isBorderBottom={false}
        wrapperStyle={{ fontSize: "28px", lineHeight: "42px", mb: "32px" }}
        title="Đã diễn ra"
      />
      <ButtonEventComponent btnTitle="Ngành Gỗ" />
      <ButtonEventComponent btnTitle="Ngành khác" />
      <SectionContent />
      <Pagination />
    </Box>
  );
}
