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
      <Box>
        <Stack h={{ md: "375px", sm: "265px" }} w="full" spacing="32px">
          <Box w={"1216px"} alignSelf="center">
            <Text
              fontSize={"28px"}
              fontWeight="600"
              alignSelf={{ base: "none", sm: "center", md: "flex-start" }}
            >
              Hình ảnh
            </Text>
          </Box>
          <SliderImage />
        </Stack>
      </Box>
    </>
  );
};

export default Thumbnail;
