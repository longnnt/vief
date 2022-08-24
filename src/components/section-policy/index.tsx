import { Box } from "@chakra-ui/react";
import React from "react";
import Section from "../section";
import PolicyInfo from "./policy-info";
import PolicyUpdate from "./policy-update";

export default function SectionPolicy() {
  return (
    <Section>
      <PolicyInfo />
      <PolicyUpdate mt="96px" />
    </Section>
  );
}
