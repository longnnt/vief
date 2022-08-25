import { Text } from "@chakra-ui/react";
import React from "react";
import { TitleProps } from "../interface";

export default function Title({
  title,
  category,
  isBorderBottom = true,
  textColor = "text.primary",
  wrapperStyle,
}: TitleProps) {
  return (
    <Text
      borderBottom={isBorderBottom ? "1px solid" : ""}
      color={textColor}
      fontWeight="600"
      fontSize={wrapperStyle?.fontSize || "20px"}
      lineHeight={wrapperStyle?.lineHeight || "30px"}
      {...wrapperStyle}
      w="fit-content"
    >
      {category ? `${category} / ${title}` : `${title}`}
    </Text>
  );
}
