import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Description from "../section-event/Description";
import Calendar from "../../Images/Icons/Calendar";
import Location from "@/src/Images/Icons/Location";
import WoodSector from "@/src/Images/Icons/WoodSector";
import { LeftContentProps } from "./interface";
import { formatDate } from "@/src/common/utils/common.utils";
import dayjs from "dayjs";

export default function LeftContent({ data }: LeftContentProps) {
  const { timeStart, field, location, shortDesc } = data;

  return (
    <Stack w={{ base: "696px", xl: "100%" }} spacing="0">
      <Box pb={"32px"}>
        <Text variant={"text14"} fontWeight="600">
          Thời gian
        </Text>
        <Description
          wrapperStyle={{ mt: "16px" }}
          content={formatDate(timeStart!)}
        >
          <Calendar />
        </Description>
        <Description wrapperStyle={{ mt: "8px" }} content={location}>
          <Location />
        </Description>
        <Description wrapperStyle={{ mt: "8px" }} content={field}>
          <WoodSector />
        </Description>
      </Box>
      <Box pb="32px">
        <Text variant={"text14"} fontWeight="600">
          Mô tả
        </Text>
        <Text textAlign={"justify"} mt="16px">
          {/* Aliquet risus mauris nunc, in amet a sed. Curabitur quam est, magna
          sodales id eu faucibus sed. Velit convallis adipiscing sed neque
          convallis diam, ultrices suscipit sodales. Tellus adipiscing in mattis
          in dignissim leo nisl. Blandit facilisis bibendum risus ultricies eu
          a, elit. Sed suscipit accumsan a integer aliquam. Nunc congue
          consequat lacus molestie semper a neque. Et malesuada amet, lorem
          felis adipiscing.
        </Text>
        <Text textAlign={"justify"} mt="32px">
          Diam turpis ac elit morbi donec libero. Purus adipiscing semper mattis
          proin diam at consectetur. Amet eu, feugiat nisl vestibulum, fusce
          dignissim tincidunt vel. Est quisque quam ac massa. Vitae senectus
          tristique tellus venenatis malesuada amet viverra mollis. Tellus sit
          odio donec faucibus massa at egestas. Nulla nunc nisl ornare et eu
          urna at sollicitudin ut. Cursus ac in urna, et volutpat vehicula
          risus, pharetra. Morbi dolor eget diam, diam mattis. Tincidunt a nulla
          odio at. */}
          {shortDesc}
        </Text>
      </Box>
    </Stack>
  );
}
