import { ChakraProps, Img, Text, VStack } from "@chakra-ui/react";
import { ROUTE_ARTICLE_DETAIL } from "../../constants/routes.constant";
import { useViefRouter } from "../../hooks/useViefRouter";
import { Article } from "../../interfaces/common.interface";
import { replacePathParams } from "../../lib/common.lib";

export type ArticleItemProps = {
  article: Article;
  imgStyle?: ChakraProps;
};
function ArticleItem({ article, imgStyle }: ArticleItemProps) {
  const router = useViefRouter();

  function handleRedirect(slug: string) {
    router.push(
      replacePathParams(ROUTE_ARTICLE_DETAIL["en"], {
        slug,
      })
    );
  }
  const { thumbnail, title, shortDesc, createdAt, slug } = article;
  return (
    <VStack spacing="4" alignItems="start" onClick={() => handleRedirect(slug)} cursor="pointer">
      <Img
        src={thumbnail.url}
        w="full"
        h={{
          base: "288px",
          sm: "123px",
        }}
        borderRadius="12px"
        objectFit="cover"
        {...imgStyle}
      />
      <Text variant="text14">{createdAt}</Text>
      <Text
        variant={{
          base: "text20",
          sm: "text16",
        }}
        className="text-2-line"
      >
        {title}
      </Text>
      <Text
        className="text-5-line"
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

export { ArticleItem };
