import { Box, Center, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ItemPartner } from "./itemPartner/ItemPartner";

const Partner = () => {
  return (
    <>
      <Center>
        <Stack spacing={{ sm: "24px", md: "42px" }}>
          <Text fontSize="28px" fontWeight="600" textAlign="center">
            ĐỐI TÁC HỢP TÁC
          </Text>
          <Stack
            justifyContent="space-between"
            spacing={{ sm: "24px", md: "64px" }}
            direction={{ md: "row", sm: "column" }}
          >
            <ItemPartner>{"/logo-iced-vn.png"}</ItemPartner>
            <ItemPartner>{"/usaid.png"}</ItemPartner>
            <ItemPartner>{"/theAsia.png"}</ItemPartner>
          </Stack>
        </Stack>
      </Center>
    </>
  );
};

export default Partner;
