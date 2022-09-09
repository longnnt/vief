import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import SectionEvent from "../section-event";
import Content from "./Content";
import { EventDetailProps } from "./interface";

export default function EventDetail({ isExpired, data }: EventDetailProps) {
  return (
    <Stack mb={"69px"} mt={{ base: "32px", sm: "16px" }}>
      <Content isExpired={isExpired} data={data!} />
      <Text variant={"text28"} pb="32px">
        {!isExpired ? "Sự kiện liên quan" : "Sự kiện sắp diễn ra"}
      </Text>
      <SectionEvent />
    </Stack>
  );
}
