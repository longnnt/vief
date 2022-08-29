import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Description from "../section-event/Description";
import Calendar from "../../Images/Icons/Calendar";
import Location from "@/src/Images/Icons/Location";
import WoodSector from "@/src/Images/Icons/WoodSector";

export default function LeftContent() {
  return (
    <Stack w={{ base: "696px", xl: "100%" }}>
      <Box pb={"32px"}>
        <Text variant={"text14"} fontWeight="600">
          Thời gian
        </Text>
        <Description wrapperStyle={{ mt: "16px" }}>
          <Calendar />
        </Description>
        <Description>
          <Location />
        </Description>
        <Description>
          <WoodSector />
        </Description>
      </Box>
      <Text variant={"text14"} fontWeight="600" mt="24px">
        Mô tả
      </Text>
      <Text textAlign={"justify"} mt="16px">
        Aliquet risus mauris nunc, in amet a sed. Curabitur quam est, magna
        sodales id eu faucibus sed. Velit convallis adipiscing sed neque
        convallis diam, ultrices suscipit sodales. Tellus adipiscing in mattis
        in dignissim leo nisl. Blandit facilisis bibendum risus ultricies eu a,
        elit. Sed suscipit accumsan a integer aliquam. Nunc congue consequat
        lacus molestie semper a neque. Et malesuada amet, lorem felis
        adipiscing.
      </Text>
      <Text textAlign={"justify"} mt="32px">
        Diam turpis ac elit morbi donec libero. Purus adipiscing semper mattis
        proin diam at consectetur. Amet eu, feugiat nisl vestibulum, fusce
        dignissim tincidunt vel. Est quisque quam ac massa. Vitae senectus
        tristique tellus venenatis malesuada amet viverra mollis. Tellus sit
        odio donec faucibus massa at egestas. Nulla nunc nisl ornare et eu urna
        at sollicitudin ut. Cursus ac in urna, et volutpat vehicula risus,
        pharetra. Morbi dolor eget diam, diam mattis. Tincidunt a nulla odio at.
      </Text>
    </Stack>
  );
}
