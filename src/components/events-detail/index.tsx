import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import SectionEvent from "../section-event";
import Content from "./Content";
import { EventDetailProps } from "./interface";

export default function EventDetail({ isExpired }: EventDetailProps) {
  return (
    <Stack mb={"69px"} mt="32px">
      <Content isExpired={isExpired} />
      <Text variant={"text28"} mb="32px">
        {!isExpired ? "Sự kiện liên quan" : "Sự kiện sắp diễn ra"}
      </Text>
      <SectionEvent />
    </Stack>
  );
}
