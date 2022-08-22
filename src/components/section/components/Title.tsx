import { Text } from "@chakra-ui/react";
import React from "react";

interface TitleProps {
  title?: string;
  w?: string;
  h?: string;
  category?: string;
}

export default function Title({ title, w, h, category }: TitleProps) {
  return (
    <Text
      w={w}
      h={h}
      borderBottom="1px solid"
      color={"blue.primary"}
      fontWeight="600"
      fontSize={"20px"}
      lineHeight="30px"
    >
      {`${category} / ${title}`}
    </Text>
  );
}
