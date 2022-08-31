import { PICTURE } from "@/src/common/constants/common.constant";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Stack, Text, VStack } from "@chakra-ui/react";

export default function SectionCompanyResearch() {
  return (
    <VStack spacing="32px">
      <VStack alignItems="end">
        <Text
          variant={{
            md: "text20",
            sm: "text16",
          }}
          w="fit-content"
          borderBottom="1.5px solid #394160"
        >
          Chuyện doanh nghiệp / Nghiên cứu điển hình
        </Text>
        <Text
          variant={{
            md: "text36",
            sm: "text28",
          }}
          w={{
            base: "80%",
            sm: "full",
          }}
          my="18px"
          textAlign={{ sm: "start", base: "end" }}
        >
          Đề xuất các nhóm giải pháp ngoài lâm nghiệp nhằm giảm phát thải khí
          nhà kính
        </Text>
      </VStack>

      <Stack
        flexDir={{
          md: "row",
          sm: "column",
        }}
        justify="space-between"
      >
        <Box
          w={{
            md: "65%",
            sm: "full",
          }}
          h={{
            md: "450px",
            sm: "230px",
          }}
        >
          <Image
            src={PICTURE("1")}
            alt=""
            w="full"
            h="full"
            objectFit="cover"
            borderRadius="16px"
          />
        </Box>
        <Box
          w={{
            md: "30%",
            sm: "full",
          }}
        >
          <Text variant="text14" textAlign="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra orci sagittis eu volutpat odio facilisis
            mauris sit amet massa vitae tortor condimentum lacinia quis vel eros
            donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue
            lacus
          </Text>
          <Button variant="primary" rightIcon={<ArrowForwardIcon />} mt="32px">
            Xem thêm
          </Button>
        </Box>
      </Stack>
    </VStack>
  );
}
