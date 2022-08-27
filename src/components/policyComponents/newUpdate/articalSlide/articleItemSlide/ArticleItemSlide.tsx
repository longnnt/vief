import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Link, Stack, Text } from "@chakra-ui/react";

const ArticleItemSlide = () => {
  return (
    <>
      <Stack
        direction={{ md: "row", sm: "column" }}
        spacing={{ md: "64px", sm: "16px" }}
        alignItems={"center"}
        w="full"
      >
        <Box
          w={{ md: "592px", sm: "343px" }}
          h={{ md: "444px", sm: "257.25px" }}
        >
          <Image
            borderRadius="12px"
            src="/articleCsIMG.png"
            width={"full"}
            height={"full"}
            objectFit="cover"
            alt=""
          ></Image>
        </Box>
        <Stack
          w={{ md: "592px", sm: "343px" }}
          spacing={{ md: "32px", sm: "16px" }}
        >
          <Stack spacing="16px">
            <Text
              variant={{ md: "tex36", sm: "text28" }}
              lineHeight={{ base: "none", sm: "42px" }}
            >
              COP26 và dấu ấn Việt Nam
            </Text>
          </Stack>
          <Text variant="text14" textAlign={"justify"}>
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
          <Link href="/" _hover={{ textDecoration: "none" }}>
            <Button variant="primary" rightIcon={<ArrowForwardIcon />}>
              Xem thêm
            </Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default ArticleItemSlide;
