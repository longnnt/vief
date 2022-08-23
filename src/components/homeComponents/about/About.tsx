import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Partner from "./partner/Partner";

const About = () => {
  return (
    <>
      <Stack spacing="64px">
        <Stack direction="row" spacing="64px">
          <Box w="50%">
            <Image
              borderRadius="12px"
              src="/bgHome.png"
              width={"full"}
              height={"full"}
              objectFit="cover"
            ></Image>
          </Box>
          <Stack justifyContent="space-between" w={"60%"} spacing="32px">
            <Stack spacing="16px">
              <Stack>
                <Link color="brand.100" fontSize="20px" fontWeight="600">
                  Về chúng tôi
                </Link>

                <Divider borderColor="brand.100"></Divider>
              </Stack>
              <Text fontSize="48px" fontWeight={700} color="brand.200">
                VIEF
              </Text>
            </Stack>
            <Text fontSize="14px" fontWeight="500" textAlign={"justify"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra orci sagittis eu volutpat odio
              facilisis mauris sit amet massa vitae tortor condimentum lacinia
              quis vel eros donec ac odio tempor orci dapibus ultrices in
              iaculis nunc sed augue lacus
            </Text>
            <Link href="/" _hover={{ textDecoration: "none" }}>
              <Button
                bg="brand.100"
                textColor="white"
                rightIcon={<ArrowForwardIcon />}
              >
                Xem thêm
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Partner></Partner>
      </Stack>
    </>
  );
};

export default About;
