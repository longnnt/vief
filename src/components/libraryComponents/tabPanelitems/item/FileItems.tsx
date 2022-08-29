import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import DownLoad from "./download/DownLoad";

function FileItems() {
  return (
    <Box bg="brand.bgItemFile" height="292px" borderRadius="12px">
      <Stack p={"12px 12px"} spacing="32px">
        <Box boxSize={"56px"}>
          <Image src="/iconFile.png" w="full" h="full"></Image>
        </Box>
        <Text variant="text20" className="text-3-line">
          Báo cáo cập nhật hai năm một lần lần thứ ba của Việt Nam (BUR3) gửi
          Công ước khung của Liên hợp quốc về biến đổi khí hậu
        </Text>
        <Box>
          <DownLoad />
        </Box>
      </Stack>
    </Box>
  );
}

export { FileItems };
