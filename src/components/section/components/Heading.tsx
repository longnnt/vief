import React from "react";
import { Heading } from "@chakra-ui/react";

interface HeadingComponentProps {
  w?: string;
  h?: string;
  heading?: string;
  mt?: string;
}

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
      color="green.primary"
      fontSize={"48px"}
      lineHeight="62.4px"
      fontWeight={700}
      mt={mt}
    >
      {heading?.toUpperCase()}
    </Heading>
  );
}
