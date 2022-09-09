import { Box, Stack, Text } from "@chakra-ui/react";
import SliderMaster from "./component/SliderMaster";

const Master = () => {
  return (
    <>
      <Box>
        <Stack
          h={{ md: "535px", sm: "515px" }}
          spacing={{ md: "32px", sm: "16px" }}
        >
          <Text
            fontSize={"28px"}
            fontWeight="600"
            alignSelf={{ base: "none", sm: "center", md: "flex-start" }}
          >
            Nhân sự /Chuyên gia
          </Text>
          <SliderMaster />
        </Stack>
      </Box>
    </>
  );
};
export default Master;
