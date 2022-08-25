import React from "react";
import { Heading } from "@chakra-ui/react";
import { HeadingComponentProps } from "../interface";

export default function HeadingComponent({
  heading,
  wrapperStyle,
}: HeadingComponentProps) {
  return (
    <Heading
      {...wrapperStyle}
      color="text.primary"
      fontSize={"36px"}
      lineHeight="54px"
      fontWeight={700}
      mt={wrapperStyle?.mt || "18px"}
    >
      {heading}
    </Heading>
  );
}
