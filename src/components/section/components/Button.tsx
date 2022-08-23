import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { ButtonComponentProps } from "../interface";
import ArrowForward from "./ArrowForward";

export default function ButtonComponent({
  w,
  h,
  btnTitle = "Xem thêm",
  p,
  isArrowForward = true,
  textHeight,
  mt = "32px",
}: ButtonComponentProps) {
  return (
    <Button
      size={"md"}
      w={w}
      h={h}
      p={p}
      backgroundColor={"blue.primary"}
      colorScheme="blue.primary"
      mt={mt}
    >
      <Text
        fontSize={"14px"}
        fontWeight="500"
        color={"white.primary"}
        mr={isArrowForward ? "8px" : 0}
        h={textHeight}
      >
        {btnTitle}
      </Text>
      {isArrowForward && <ArrowForward />}
    </Button>
  );
}
