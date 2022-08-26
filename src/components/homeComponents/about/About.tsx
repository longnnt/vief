import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Partner from "./partner/Partner";

const About = () => {
  return (
    <>
      <Stack spacing="64px">
        <Stack
          direction={{
            md: "row",
            sm: "column-reverse",
          }}
          justifyContent="space-between"
        >
          <Box
            w={{
              md: "47%",
              sm: "100%",
            }}
            h="444px"
          >
            <Image
              borderRadius="12px"
              src="/bgHome.png"
              width={"full"}
              height={"full"}
              objectFit="cover"
              alt=""
            />
          </Box>
          <Stack
            w={{
              md: "47%",
              sm: "100%",
            }}
            h="full"
            spacing="32px"
          >
            <Stack>
              <Stack>
                <Link
                  variant={{
                    md: "text20",
                    sm: "text16",
                  }}
                  borderBottom={"solid 1.5px"}
                  width="fit-content"
                  _hover={{ textDecoration: "none" }}
                >
                  Về chúng tôi
                </Link>
              </Stack>
              <Text
                variant={{
                  md: "text36",
                  sm: "text28",
                }}
              >
                ViEF - Vietnam Economic Forum
              </Text>
            </Stack>
            <Text variant="text14" textAlign={"justify"}>
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

        <Partner />
      </Stack>
    </>
  );
};

export default About;
