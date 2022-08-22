import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ButtonComponent from "./Button";

interface ShortDesProps {
  shortDes?: string;
  w?: string;
  h?: string;
  p?: string;
  m?: string;
  mt?: string;
  textWidth?: string;
  textHeight?: string;
  btnTitle?: string;
}

export default function ShortDes({
  shortDes,
  w,
  h,
  p,
  m,
  mt,
  textWidth,
  textHeight,
  btnTitle,
}: ShortDesProps) {
  return (
    <Box w={w} h={h} p={p} m={m} mt={mt}>
      <Text w={textWidth} h={textHeight} textAlign="justify">
        {shortDes}
      </Text>
      <ButtonComponent btnTitle={btnTitle} />
    </Box>
  );
}
