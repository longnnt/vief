import { Article } from "@/src/components/enterprise-story/interfaces";
import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useViefRouter } from "@/common/hooks/useViefRouter";
import { replacePathParams } from "../../lib/common.lib";
import { ROUTE_ENTERPRISE_ARTICLE_DETAIL } from "../../constants/routes.constant";

type HotNewsProps = {
  articles: Article[];
  label: string;
};
function HotNews({ articles, label }: HotNewsProps) {
  const router = useViefRouter();

  function handleRedirect(slug: string) {
    router.push(
      replacePathParams(ROUTE_ENTERPRISE_ARTICLE_DETAIL["en"], {
        slug,
      })
    );
  }
  return (
    <VStack spacing="32px">
      <Text variant="text28">{label}</Text>
      {articles.map(({ date, title, url, slug }, index) => {
        return (
          <HStack
            key={index}
            alignItems="start"
            h={{
              base: "102px",
              sm: "81px",
            }}
            cursor="pointer"
            onClick={() => handleRedirect(slug)}
          >
            <Image
              src={url}
              alt=""
              w={{
                base: "136px",
                sm: "108px",
              }}
              h="full"
              borderRadius="6px"
              objectFit="cover"
            />

            <VStack h="full" justifyContent="space-between" alignItems="start">
              <Text
                variant={{
                  base: "text20",
                  sm: "text16",
                }}
                className="text-2-line"
              >
                {title}
              </Text>
              <Text variant="text14">{date}</Text>
            </VStack>
          </HStack>
        );
      })}
    </VStack>
  );
}

export { HotNews };
