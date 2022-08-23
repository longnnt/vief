import { Text } from "@chakra-ui/react";
import React from "react";
import { TitleProps } from "../interface";

export default function Title({
  title,
  w,
  h,
  category,
  isBorderBottom = true,
  textColor = "text.primary",
  mb,
  lineHeight = "30px",
}: TitleProps) {
  return (
    <Text
      w={w}
      h={h}
      borderBottom={isBorderBottom ? "1px solid" : ""}
      color={textColor}
      fontWeight="600"
      fontSize={"20px"}
      lineHeight={lineHeight}
      mb={mb}
    >
      {category ? `${category} / ${title}` : `${title}`}
    </Text>
  );
}
