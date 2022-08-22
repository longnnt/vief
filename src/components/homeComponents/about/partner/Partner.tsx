import { Box, Center, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Partner = () => {
  return (
    <>
      <Center>
        <Stack spacing={"42px"}>
          <Text fontSize="28px" fontWeight="600" textAlign="center">
            ĐỐI TÁC HỢP TÁC
          </Text>
          <Stack
            justifyContent="space-between"
            spacing={"64px"}
            direction="row"
          >
            <Box>
              <Image src="/logo-iced-vn.png" h="64px" w="auto"></Image>
            </Box>
            <Box>
              <Image src="/usaid.png" h="64px" w="auto"></Image>
            </Box>
            <Box>
              <Image src="/theAsia.png" h="64px" w="auto"></Image>
            </Box>
          </Stack>
        </Stack>
      </Center>
    </>
  );
};

export default Partner;
