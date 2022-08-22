import { Box } from "@chakra-ui/react";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return (
    <Box m={"128px 352px 0"} w="1216px">
      {children}
    </Box>
  );
}
