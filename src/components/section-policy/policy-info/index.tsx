import { PICTURE } from "@/src/common/constants/common.constant";
import { ROUTE_POLICY } from "@/src/common/constants/routes.constant";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";

export default function PolicyInfo() {
  const router = useViefRouter();

  function handleRoutePolicyPage() {
    router.push(ROUTE_POLICY["en"]);
  }
  return (
    <Stack spacing={{ md: "32px", sm: "16px" }}>
      <Stack>
        <Text
          variant={{
            md: "text20",
            sm: "text16",
          }}
          w="fit-content"
          borderBottom="1.5px solid #394160"
        >
          Chính sách / Thông tin chính sách
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
        >
          Ban hành danh mục lĩnh vực, cơ sở phát thải khí nhà kính phai thực hiện kiểm kê khí nhà kính
        </Text>
      </Stack>

      <Stack
        direction={{
          md: "row",
          sm: "column-reverse",
        }}
        spacing={{ md: "64px", sm: "16px" }}
      >
        <Stack w={{ md: "30%", sm: "100%" }} spacing={{ sm: "16px", md: "32px" }} alignSelf="center">
          <Text variant="text14" textAlign="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
            magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla
            est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui
            faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor
            condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus
          </Text>
          <Box>
            <Button w="128px" variant="primary" rightIcon={<ArrowForwardIcon />} onClick={handleRoutePolicyPage}>
              Xem thêm
            </Button>
          </Box>
        </Stack>
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
          <Image src={PICTURE("1")} alt="" w="full" h="full" objectFit="cover" borderRadius="16px" />
        </Box>
      </Stack>
    </Stack>
  );
}
