import {
  Box,
  Button,
  Center,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <Center>
        <Stack w="1216px" spacing="32px">
          <Stack
            spacing="16px"
            w={{ md: "592px", sm: "343px" }}
            alignSelf="center"
          >
            <Text
              align="center"
              fontSize="28px"
              fontWeight="600"
              lineHeight="42px"
            >
              Liên Hệ
            </Text>
            <Text textAlign="center" fontSize="14px" fontWeight="500">
              Vulputate sem volutpat cras senectus lorem massa volutpat
              pellentesque dui. Tortor, pretium sed at hendrerit justo.
              Facilisis condimentum ultrices fermentum
            </Text>
          </Stack>

          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing="32px"
            alignItems={"center"}
          >
            <Box
              w={{ md: "592px", sm: "343px" }}
              h={{ md: "444px", sm: "257.25px" }}
            >
              <Image
                src="/researchIMG.png"
                w="100%"
                h="100%"
                objectFit={"cover"}
                borderRadius={"12px"}
              ></Image>
            </Box>
            <Stack spacing="32px" w={{ md: "592px", sm: "343px" }}>
              <Stack spacing="8px">
                <Text fontWeight="500" fontSize="14px">
                  Họ và tên
                </Text>
                <Input bg="brand.bgItemFile" borderRadius="6px"></Input>
              </Stack>
              <Stack spacing="8px">
                <Text fontWeight="500" fontSize="14px">
                  Email
                </Text>
                <Input bg="brand.bgItemFile" borderRadius="6px"></Input>
              </Stack>
              <Stack spacing="8px">
                <Text fontWeight="500" fontSize="14px">
                  Lời nhắn
                </Text>
                <Input
                  h="120px"
                  bg="brand.bgItemFile"
                  borderRadius="6px"
                ></Input>
              </Stack>

              <Box w="132px">
                <Button
                  bg="brand.100"
                  w="full"
                  textColor="white"
                  fontSize="14px"
                  fontWeight="600"
                >
                  Gửi
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </>
  );
};

export default Contact;
