import {
  Box,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import SubmitSuccess from "./submitNoti/SumbitSuccess";

const Contact = () => {
  return (
    <>
      <Box>
        <Stack spacing="32px">
          <Stack
            spacing="16px"
            w={{ md: "592px", sm: "full" }}
            alignSelf="center"
          >
            <Text align="center" variant={{ md: "text28", sm: "text24" }}>
              Liên Hệ
            </Text>
            <Text textAlign="center" variant="text14">
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
              w={{ md: "592px", sm: "full" }}
              h={{ md: "444px", sm: "257.25px" }}
            >
              <Image
                src="/researchIMG.png"
                w="100%"
                h="100%"
                objectFit={"cover"}
                borderRadius={"12px"}
                alt=""
              />
            </Box>
            <Stack spacing="32px" w={{ md: "592px", sm: "full" }}>
              <FormControl isRequired>
                <FormLabel>Họ và tên</FormLabel>
                <Input bg="inputBg" borderRadius="6px" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input bg="inputBg" borderRadius="6px" type="email" />
              </FormControl>
              <FormControl>
                <FormLabel>Lời nhắn</FormLabel>
                <Input bg="inputBg" borderRadius="6px" h="120px" />
              </FormControl>
              <SubmitSuccess />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Contact;
