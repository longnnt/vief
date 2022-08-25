import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import SliderImage from "./component/SliderImage";

const Thumbnail = () => {
  return (
    <>
      <Center>
        <Stack
          w={{ md: "1216px", sm: "375px" }}
          h={{ md: "394px", sm: "265px" }}
          spacing="32px"
        >
          <Text
            fontSize={"28px"}
            fontWeight="600"
            alignSelf={{ base: "none", sm: "center", md: "flex-start" }}
          >
            Hình ảnh
          </Text>
          <SliderImage />
        </Stack>
      </Center>
    </>
  );
};

export default Thumbnail;
