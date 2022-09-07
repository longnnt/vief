import { Article } from "@/src/common/interfaces/common.interface";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Link, Stack, Text } from "@chakra-ui/react";

type Props = {
  article: Article;
};
const ArticleItemSlide = ({ article }: Props) => {
  return (
    <>
      <Stack
        direction={{ md: "row", sm: "column" }}
        spacing={{ md: "64px", sm: "16px" }}
        alignItems={"center"}
        w="full"
      >
        <Box
          w={{ md: "592px", sm: "343px" }}
          h={{ md: "444px", sm: "257.25px" }}
        >
          <Image
            borderRadius="12px"
            src={article.thumbnail.url}
            width={"full"}
            height={"full"}
            objectFit="cover"
            alt=""
          />
        </Box>
        <Stack
          w={{ md: "592px", sm: "343px" }}
          spacing={{ md: "32px", sm: "16px" }}
        >
          <Stack spacing="16px">
            <Text
              variant={{ md: "tex36", sm: "text28" }}
              lineHeight={{ base: "none", sm: "42px" }}
            >
              {article.title}
            </Text>
          </Stack>
          <Text variant="text14" textAlign={"justify"}>
            {article.shortDesc}
          </Text>
          <Link href="/" _hover={{ textDecoration: "none" }}>
            <Button variant="primary" rightIcon={<ArrowForwardIcon />}>
              Xem thêm
            </Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default ArticleItemSlide;
