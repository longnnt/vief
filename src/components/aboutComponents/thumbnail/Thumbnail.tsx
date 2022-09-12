import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ListImgProps } from "../interfaces";
import SliderImage from "./component/SliderImage";

const Thumbnail = ({ listImg, listImgThumb }: ListImgProps) => {
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
          <SliderImage listImg={listImg} listImgThumb={listImgThumb} />
        </Stack>
      </Box>
    </>
  );
};

export default Thumbnail;
