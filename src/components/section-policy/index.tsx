import { Box } from "@chakra-ui/react";
import React from "react";
import PolicyInfo from "./policy-info";
import PolicyUpdate from "./policy-update";

export default function SectionPolicy() {
  return (
    <Box>
      <PolicyInfo />
      <PolicyUpdate mt="96px" />
    </Box>
  );
}
