import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import SliderMaster from "./component/SliderMaster";

const Master = () => {
  return (
    <>
      <Center>
        <Stack
          w={{ md: "1216px", sm: "375px" }}
          h={{ md: "535px", sm: "515px" }}
          spacing={{ md: "32px", sm: "16px" }}
        >
          <Text
            fontSize={"28px"}
            fontWeight="600"
            alignSelf={{ base: "none", sm: "center", md: "flex-start" }}
          >
            Nhân sự/ Chuyên gia
          </Text>
          <SliderMaster />
        </Stack>
      </Center>
    </>
  );
};
export default Master;
