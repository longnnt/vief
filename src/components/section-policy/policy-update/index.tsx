import { PICTURE } from "@/src/common/constants/common.constant";
import { ROUTE_POLICY } from "@/src/common/constants/routes.constant";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Image, Stack, Text } from "@chakra-ui/react";

export default function PolicyUpdate() {
  const router = useViefRouter();

  function handleRoutePolicy() {
    router.push(ROUTE_POLICY["en"]);
  }
  return (
    <Stack spacing={{ md: "32px", sm: "16px" }}>
      <Stack spacing={{ md: "32px", sm: "16px" }}>
        <Text
          variant={{
            md: "text20",
            sm: "text16",
          }}
          w="fit-content"
          borderBottom="1.5px solid #394160"
        >
          Chính sách / Mới cập nhật
        </Text>
        <Text
          variant={{
            md: "text36",
            sm: "text28",
          }}
          w={{
            md: "80%",
            sm: "full",
          }}
          my="18px"
        >
          COP26 và dấu ấn Việt Nam
        </Text>
      </Stack>

      <Stack
        direction={{
          md: "row",
          sm: "column",
        }}
        spacing={{ md: "32px", sm: "16px" }}
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
          <Image src={PICTURE("2")} alt="" w="full" h="full" objectFit="cover" borderRadius="16px" />
        </Box>
        <Stack
          w={{
            md: "35%",
            sm: "full",
          }}
          spacing={{ md: "32px", sm: "16px" }}
        >
          <Text variant="text14" textAlign="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
            magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla
            est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui
            faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa
          </Text>
          <Box>
            <Button w="128px" variant="primary" rightIcon={<ArrowForwardIcon />} onClick={handleRoutePolicy}>
              Xem thêm
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
