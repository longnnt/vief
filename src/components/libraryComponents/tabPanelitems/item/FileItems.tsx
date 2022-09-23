import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { docProps, DocumentItem } from "../../interfaces";
import DownLoad from "./download/DownLoad";

function FileItems({ docItem }: docProps) {
  return (
    <Box bg="brand.bgItemFile" height="280px" borderRadius="12px">
      <Stack p={"16px 16px"} justifyContent="space-between" h="full">
        <Box boxSize={"56px"}>
          <Image src="/pdf.png" w="full" h="full"></Image>
        </Box>
        <Text variant={{ md: "text20", sm: "text16" }} className="text-3-line">
          {docItem.shortDesc}
        </Text>
        <Box>
          <DownLoad docItem={docItem} />
        </Box>
      </Stack>
    </Box>
  );
}

export { FileItems };
