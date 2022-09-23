import { PICTURE } from "@/src/common/constants/common.constant";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function SectionCompanyStory() {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={0}
        display={{ md: "flex", sm: "none" }}
      >
        <VStack w="46%" align="start" spacing={0}>
          <Text
            variant={{
              md: "text20",
              sm: "text16",
            }}
            w="fit-content"
            borderBottom="1.5px solid #394160"
          >
            Chuyện doanh nghiệp / Câu chuyện
          </Text>
          <Text
            variant={{
              md: "text36",
              sm: "text28",
            }}
            w={"100%"}
            textAlign={"start"}
            pt="16px"
            pb="32px"
          >
            IFC phối hợp ngân hàng Việt thúc đẩy dự án bảo vệ môi trường
          </Text>
          <Text variant="text14" textAlign="justify" pb="32px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra orci sagittis eu volutpat odio facilisis
            mauris sit amet massa
          </Text>
          <Button
            size="md"
            variant="primary"
            rightIcon={<ArrowForwardIcon />}
            mt="32px"
          >
            Xem thêm
          </Button>
        </VStack>
        <Box w="50%">
          <Image
            src={PICTURE("1")}
            alt=""
            objectFit="cover"
            borderRadius="16px"
            w="594px"
            h="444px"
          />
        </Box>
      </Stack>

      <Stack display={{ md: "none", sm: "stack" }} spacing="16px">
        <VStack w="100%" align="start" spacing="8px">
          <Text
            variant={{
              md: "text20",
              sm: "text16",
            }}
            w="fit-content"
            borderBottom="1.5px solid #394160"
          >
            Chuyện doanh nghiệp / Câu chuyện
          </Text>
          <Text
            variant={{
              md: "text36",
              sm: "text28",
            }}
            w={"100%"}
            textAlign={"start"}
          >
            IFC phối hợp ngân hàng Việt thúc đẩy dự án bảo vệ môi trường
          </Text>
          <Box w="full">
            <Image
              src={PICTURE("1")}
              alt=""
              objectFit="cover"
              borderRadius="16px"
              h="257.25px"
              w="full"
            />
          </Box>
          <Text variant="text14" textAlign="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra orci sagittis eu volutpat odio facilisis
            mauris sit amet massa
          </Text>
          <Button variant="primary" rightIcon={<ArrowForwardIcon />}>
            Xem thêm
          </Button>
        </VStack>
      </Stack>
    </>
  );
}
