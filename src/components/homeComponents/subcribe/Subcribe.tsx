import { Box, Button, Image, Input, Stack, Text } from "@chakra-ui/react";

const Subcribe = () => {
  return (
    <>
      <Stack direction="row" spacing="32px" alignItems={"center"}>
        <Box w="592px" h="444px">
          <Image
            src="/researchIMG.png"
            w="592px"
            h="444px"
            objectFit={"cover"}
            borderRadius={"12px"}
            alt=""
          ></Image>
        </Box>
        <Stack spacing="32px" w="50%">
          <Text
            fontSize="28px"
            fontWeight={700}
            color="text"
            textTransform={"uppercase"}
          >
            Đăng ký nhận tin
          </Text>
          <Text>
            Vulputate sem volutpat cras senectus lorem massa volutpat
            pellentesque dui. Tortor, pretium sed at hendrerit justo. Facilisis
            condimentum ultrices fermentum
          </Text>
          <Stack spacing="8px">
            <Text>Họ và tên</Text>
            <Input bg="brand.bgItemFile" borderRadius="6px"></Input>
          </Stack>
          <Stack spacing="8px">
            <Text>Email</Text>
            <Input bg="brand.bgItemFile" borderRadius="6px"></Input>
          </Stack>

          <Box>
            <Button bg="brand.100" textColor="white">
              Đăng ký
            </Button>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Subcribe;
