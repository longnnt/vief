import { Box, Stack, Text } from "@chakra-ui/react";
import { ListImgProps, ThumbnailItemProp } from "../interfaces";
import SliderMaster from "./component/SliderMaster";

const Master = ({ listImgThumb }: ThumbnailItemProp) => {
  return (
    <>
      <Box>
        <Stack
          h={{ md: "535px", sm: "515px" }}
          spacing={{ md: "32px", sm: "16px" }}
        >
          <Box w={"1216px"} alignSelf="center">
            <Text
              fontSize={"28px"}
              fontWeight="600"
              alignSelf={{ base: "none", sm: "center", md: "flex-start" }}
            >
              Nhân sự /Chuyên gia
            </Text>
          </Box>
          <SliderMaster listImgThumb={listImgThumb} />
        </Stack>
      </Box>
    </>
  );
};
export default Master;
