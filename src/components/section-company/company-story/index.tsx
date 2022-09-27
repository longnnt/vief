import { ROUTE_ARTICLE_DETAIL } from "@/src/common/constants/routes.constant";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import { Article } from "@/src/common/interfaces/common.interface";
import { replacePathParams } from "@/src/common/lib/common.lib";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  article: Article;
};
export default function SectionCompanyStory({ article }: Props) {
  const router = useViefRouter();

  function handleRoutePolicyPage(slug: string) {
    router.push(
      replacePathParams(ROUTE_ARTICLE_DETAIL["en"], {
        slug,
      })
    );
  }
  return (
    <Stack direction={{ md: "row", sm: "column-reverse" }} justifyContent="space-between" spacing={0} w="full">
      <VStack w={{ md: "46%", sm: "100%" }} align="start" spacing={0}>
        <Text variant={{ md: "text20", sm: "text16" }} w="fit-content" borderBottom="1.5px solid #394160">
          Chuyện doanh nghiệp / Câu chuyện
        </Text>
        <Text variant={{ md: "text36", sm: "text28" }} w={"100%"} textAlign={"start"} pt="16px" pb="32px">
          {article.title}
        </Text>
        <Box
          fontSize="text14"
          fontWeight="500"
          color="text"
          textAlign="justify"
          pb="32px"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        <Button
          size="md"
          variant="primary"
          rightIcon={<ArrowForwardIcon />}
          mt="32px"
          onClick={() => handleRoutePolicyPage(article.slug)}
        >
          Xem thêm
        </Button>
      </VStack>
      <Box
        w={{ md: "50%", sm: "100%" }}
        h={{ md: "444px", sm: "250px" }}
        borderRadius="16px"
        position="relative"
        overflow="hidden"
      >
        <Image src={article.thumbnail.url} alt="" priority layout="fill" />
      </Box>
    </Stack>
  );
}
