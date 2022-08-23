import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Partner from "./partner/Partner";

const About = () => {
  return (
    <Stack spacing="64px">
      <SimpleGrid columns={2} spacing="64px">
        <Box
          borderRadius={12}
          bgPosition="center"
          bgImage="url('/bgHome.png')"
          w="592px"
          h="444px"
          bgSize="cover"
        ></Box>
        <Stack justifyContent="space-between">
          <Stack spacing="16px">
            <Stack>
              <Link color="brand.100" fontSize="20px" fontWeight="600">
                Về chúng tôi
              </Link>
              <Divider borderColor="brand.100" width={"21%"}></Divider>
            </Stack>
            <Text fontSize="48px" fontWeight={700} color="brand.200">
              VIEF
            </Text>
          </Stack>
          <Text fontSize="14px" fontWeight="500" textAlign={"justify"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra orci sagittis eu volutpat odio facilisis
            mauris sit amet massa vitae tortor condimentum lacinia quis vel eros
            donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue
            lacus
          </Text>
          <Box>
            <Button bg="brand.100" rightIcon={<ArrowForwardIcon />}>
              Xem thêm
            </Button>
          </Box>
        </Stack>
      </SimpleGrid>
      <Divider
        borderColor="brand.100"
        alignSelf={"center"}
        width={"10%"}
      ></Divider>
      <Partner></Partner>
    </Stack>
  );
};

export default About;
