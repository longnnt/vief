import { Box, Button, Image, Input, Stack, Text } from "@chakra-ui/react";

const Subcribe = () => {
  return (
    <>
      <Stack
        direction={{ md: "row", sm: "column" }}
        alignItems={"center"}
        justifyContent="space-between"
        display={{ md: "flex", sm: "none" }}
      >
        <Box w="48%" h="444px">
          <Image
            src="/researchIMG.png"
            w="592px"
            h="444px"
            objectFit={"cover"}
            borderRadius={"12px"}
            alt=""
          ></Image>
        </Box>
        <Stack
          spacing="32px"
          w={{
            md: "48%",
            sm: "full",
          }}
        >
          <Text variant="text28">Đăng ký nhận tin</Text>
          <Text variant="text14">
            Vulputate sem volutpat cras senectus lorem massa volutpat
            pellentesque dui. Tortor, pretium sed at hendrerit justo. Facilisis
            condimentum ultrices fermentum
          </Text>
          <Stack spacing="8px">
            <Text variant="text14">Họ và tên</Text>
            <Input
              bg="inputBg"
              borderRadius="6px"
              focusBorderColor="focusBorder"
              _focus={{ bg: "none" }}
            />
          </Stack>
          <Stack spacing="8px">
            <Text variant="text14">Email</Text>
            <Input
              bg="inputBg"
              borderRadius="6px"
              focusBorderColor="focusBorder"
              _focus={{ bg: "none" }}
            />
          </Stack>

          <Box>
            <Button variant="primary" w="132px">
              Đăng ký
            </Button>
          </Box>
        </Stack>
      </Stack>

      <Stack
        direction={{ md: "row", sm: "column" }}
        alignItems={"center"}
        justifyContent="space-between"
        display={{ md: "none", sm: "stack" }}
      >
        <Stack
          spacing="32px"
          w={{
            md: "48%",
            sm: "full",
          }}
        >
          <Stack spacing="16px">
            <Text variant={{ md: "text28", sm: "text24" }}>
              Đăng ký nhận tin
            </Text>
            <Text variant="text14">
              Vulputate sem volutpat cras senectus lorem massa volutpat
              pellentesque dui. Tortor, pretium sed at hendrerit justo.
              Facilisis condimentum ultrices fermentum
            </Text>
          </Stack>

          <Box w="100%" h="257.25px">
            <Image
              src="/researchIMG.png"
              w="full"
              h="full"
              objectFit={"cover"}
              borderRadius={"12px"}
              alt=""
            ></Image>
          </Box>

          <Stack spacing="8px">
            <Text variant="text14">Họ và tên</Text>
            <Input
              bg="inputBg"
              borderRadius="6px"
              focusBorderColor="focusBorder"
              _focus={{ bg: "none" }}
            />
          </Stack>
          <Stack spacing="8px">
            <Text variant="text14">Email</Text>
            <Input
              bg="inputBg"
              borderRadius="6px"
              focusBorderColor="focusBorder"
              _focus={{ bg: "none" }}
            />
          </Stack>

          <Box>
            <Button variant="primary" w="132px">
              Đăng ký
            </Button>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Subcribe;
