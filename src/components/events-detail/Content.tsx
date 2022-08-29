import { PICTURE } from "@/src/common/constants/common.constant";
import LeftArrow from "@/src/Images/Icons/LeftArrow";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import TimeLeft from "../events/components/TimeLeft";
import FormSignup from "./FormSignup";
import { ContentProps } from "./interface";
import LeftContent from "./LeftContent";

export default function Content({ isExpired }: ContentProps) {
  return (
    <Stack spacing="0">
      <Flex w={"100%"} alignItems="center" mb={{ base: "64px", sm: "48px" }}>
        <LeftArrow />
        <Link href={"/events"}>
          <a>
            <Text variant={"text20"} ml={"16px"}>
              Quay lại
            </Text>
          </a>
        </Link>
      </Flex>
      <Stack pb="32px">
        <Image src={PICTURE("1")} alt="" mb={"32px"} borderRadius="12px" />
        <Box
          w="fit-content"
          bg="orange"
          p="8px 16px"
          borderRadius={"8px"}
          mb="32px"
        >
          <TimeLeft
            days={1}
            wrapperStyle={{ color: "white", lineHeight: "20px" }}
            stroke="#fff"
            isExpired={isExpired}
          />
        </Box>
      </Stack>
      <Text variant={"text36"} pb="32px">
        LIÊN HỢP QUỐC KHỞI ĐỘNG THẬP KỶ PHỤC HỒI HỆ SINH THÁI
      </Text>
      <Flex
        justifyContent={"space-between"}
        mt="32px"
        flexDirection={{ sm: "column", base: "row" }}
        pb={{ base: "64px", sm: "48px" }}
      >
        <LeftContent />
        <FormSignup isExpired={isExpired} />
      </Flex>
    </Stack>
  );
}
