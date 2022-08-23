import React from "react";
import { Heading } from "@chakra-ui/react";
import { HeadingComponentProps } from "../interface";

export default function HeadingComponent({
  w,
  h,
  mt = "18px",
  heading,
}: HeadingComponentProps) {
  return (
    <Heading
      w={w}
      h={h}
      color="text.primary"
      fontSize={"36px"}
      lineHeight="50.4px"
      fontWeight={700}
      mt={mt}
    >
      {heading}
    </Heading>
  );
}
