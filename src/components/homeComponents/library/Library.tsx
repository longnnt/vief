import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const Library = () => {
  return (
    <>
      <Stack spacing="32px">
        <Stack spacing="16px">
          <Stack>
            <Breadcrumb
              color="brand.100"
              fontSize="20px"
              fontWeight="600"
              borderBottom={"solid 1.5px"}
              width="fit-content"
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#" _hover={{ textDecoration: "none" }}>
                  Thư viện
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Stack>
          <Text fontSize="32px" fontWeight={600} color="brand.200">
            Báo cáo về biến đổi khí hậu
          </Text>
        </Stack>
        <SimpleGrid columns={2} spacing={"32px"}>
          <Box bg="brand.bgItemFile" height="292px" borderRadius="12px">
            <Stack p={"12px 12px"} spacing="32px">
              <Box boxSize={"56px"}>
                <Image src="/iconFile.png" w="full" h="full"></Image>
              </Box>
              <Text fontWeight={600}>
                Báo cáo cập nhật hai năm một lần lần thứ ba của Việt Nam (BUR3)
                gửi Công ước khung của Liên hợp quốc về biến đổi khí hậu
              </Text>
              <Box>
                <Button
                  bg="brand.100"
                  textColor="white"
                  rightIcon={<DownloadIcon />}
                >
                  Tải về
                </Button>
              </Box>
            </Stack>
          </Box>
          <Box bg="brand.bgItemFile" height="292px" borderRadius="12px">
            <Stack p={"12px 12px"} spacing="32px">
              <Box boxSize={"56px"}>
                <Image src="/iconFile.png" w="full" h="full"></Image>
              </Box>
              <Text fontWeight={600}>
                Báo cáo cập nhật hai năm một lần lần thứ ba của Việt Nam (BUR3)
                gửi Công ước khung của Liên hợp quốc về biến đổi khí hậu
              </Text>
              <Box>
                <Button
                  bg="brand.100"
                  textColor="white"
                  rightIcon={<DownloadIcon />}
                >
                  Tải về
                </Button>
              </Box>
            </Stack>
          </Box>
          <Box bg="brand.bgItemFile" height="292px" borderRadius="12px">
            <Stack p={"12px 12px"} spacing="32px">
              <Box boxSize={"56px"}>
                <Image src="/iconFile.png" w="full" h="full"></Image>
              </Box>
              <Text fontWeight={600}>
                Báo cáo cập nhật hai năm một lần lần thứ ba của Việt Nam (BUR3)
                gửi Công ước khung của Liên hợp quốc về biến đổi khí hậu
              </Text>
              <Box>
                <Button
                  bg="brand.100"
                  textColor="white"
                  rightIcon={<DownloadIcon />}
                >
                  Tải về
                </Button>
              </Box>
            </Stack>
          </Box>

          <Box bg="brand.bgItemFile" height="292px" borderRadius="12px">
            <Stack p={"12px 12px"} spacing="32px">
              <Box boxSize={"56px"}>
                <Image src="/iconFile.png" w="full" h="full"></Image>
              </Box>
              <Text fontWeight={600} color="#394160">
                Báo cáo cập nhật hai năm một lần lần thứ ba của Việt Nam (BUR3)
                gửi Công ước khung của Liên hợp quốc về biến đổi khí hậu
              </Text>
              <Box>
                <Button
                  bg="brand.100"
                  textColor="white"
                  rightIcon={<DownloadIcon />}
                >
                  Tải về
                </Button>
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default Library;
