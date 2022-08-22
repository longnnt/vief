import { Button, Text } from "@chakra-ui/react";
import React from "react";
import ArrowForward from "./ArrowForward";

interface ButtonComponentProps {
  w?: string;
  h?: string;
  btnTitle?: string;
  p?: string;
  isArrowForward?: boolean;
}

export default function ButtonComponent({
  w,
  h,
  btnTitle = "Xem thêm",
  p,
  isArrowForward = true,
}: ButtonComponentProps) {
  return (
    <Button
      size={"md"}
      w={w}
      h={h}
      p={p}
      backgroundColor={"blue.primary"}
      colorScheme="blue.primary"
      mt="32px"
    >
      <Text fontSize={"14px"} fontWeight="500" color={"white.primary"} mr="8px">
        {btnTitle}
      </Text>
      {isArrowForward && <ArrowForward />}
    </Button>
  );
}
