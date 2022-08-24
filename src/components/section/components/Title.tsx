import { Text } from "@chakra-ui/react";
import React from "react";
import { TitleProps } from "../interface";

export default function Title({
  title,
  category,
  isBorderBottom = true,
  textColor = "text.primary",
  lineHeight = "30px",
  wrapperStyle,
}: TitleProps) {
  return (
    <Text
      borderBottom={isBorderBottom ? "1px solid" : ""}
      color={textColor}
      fontWeight="600"
      fontSize={"20px"}
      lineHeight={lineHeight}
      {...wrapperStyle}
      w="fit-content"
    >
      {category ? `${category} / ${title}` : `${title}`}
    </Text>
  );
}
