import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { ShortDesProps } from "../interface";
import ButtonComponent from "./Button";

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
  haveButton = true,
  textAlign,
}: ShortDesProps) {
  return (
    <Box w={w} h={h} p={p} m={m} mt={mt}>
      <Text
        w={textWidth}
        h={textHeight}
        textAlign={textAlign}
        color={"text.primary"}
      >
        {shortDes}
      </Text>
      {haveButton && <ButtonComponent btnTitle={btnTitle} />}
    </Box>
  );
}
