import { ROUTE_POLICY_ARTICLE_DETAIL } from "@/src/common/constants/routes.constant";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import { Article } from "@/src/common/interfaces/common.interface";
import { replacePathParams } from "@/src/common/lib/common.lib";
import { Img, Text, VStack } from "@chakra-ui/react";

export type Props = {
  article: Article;
};
function ArticlePolicyItem({ article }: Props) {
  const router = useViefRouter();

  function handleRedirect(slug: string) {
    router.push(
      replacePathParams(ROUTE_POLICY_ARTICLE_DETAIL["en"], {
        slug,
      })
    );
  }
  const {
    thumbnail: { url },
    title,
    shortDesc,
    createdAt,
    slug,
  } = article;
  return (
    <VStack
      spacing="4"
      alignItems="start"
      onClick={() => handleRedirect(slug)}
      cursor="pointer"
    >
      <Img
        src={url}
        w="full"
        h={{
          base: "288px",
          sm: "123px",
        }}
        borderRadius="12px"
        objectFit="cover"
      />
      <Text variant="text14">{createdAt}</Text>
      <Text
        variant={{
          base: "text20",
          sm: "text16",
        }}
        className="text-3-line"
      >
        {title}
      </Text>
      <Text
        variant="text14"
        display={{
          base: "block",
          sm: "none",
        }}
      >
        {shortDesc}
      </Text>
    </VStack>
  );
}

export { ArticlePolicyItem };
