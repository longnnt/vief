import { PICTURE } from "@/src/common/constants/common.constant";
import { ROUTE_ARTICLE_DETAIL } from "@/src/common/constants/routes.constant";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import { Article } from "@/src/common/interfaces/common.interface";
import { replacePathParams } from "@/src/common/lib/common.lib";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  policy: Article;
};
export default function PolicyUpdate({ policy }: Props) {
  const router = useViefRouter();

  function handleRoutePolicy(slug: string) {
    router.push(
      replacePathParams(ROUTE_ARTICLE_DETAIL["en"], {
        slug,
      })
    );
  }
  return (
    <Stack spacing={{ md: "32px", sm: "16px" }}>
      <Stack spacing={{ md: "32px", sm: "16px" }}>
        <Text variant={{ md: "text20", sm: "text16" }} w="fit-content" borderBottom="1.5px solid #394160">
          Chính sách / Mới cập nhật
        </Text>
        <Text variant={{ md: "text36", sm: "text28" }} w={{ md: "80%", sm: "full" }} my="18px">
          {policy.title}
        </Text>
      </Stack>

      <Stack direction={{ md: "row", sm: "column" }} spacing={{ md: "32px", sm: "16px" }}>
        <Box
          w={{ md: "65%", sm: "full" }}
          h={{ md: "450px", sm: "230px" }}
          position="relative"
          overflow="hidden"
          borderRadius="16px"
        >
          <Image src={policy.thumbnail.url} alt="" priority layout="fill" />
        </Box>
        <Stack w={{ md: "35%", sm: "full" }} spacing={{ md: "32px", sm: "16px" }}>
          <Box
            fontSize="14px"
            fontWeight="500"
            color="text"
            textAlign="justify"
            dangerouslySetInnerHTML={{ __html: policy.content }}
          />
          <Box>
            <Button
              w="128px"
              variant="primary"
              rightIcon={<ArrowForwardIcon />}
              onClick={() => handleRoutePolicy(policy.slug)}
            >
              Xem thêm
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
