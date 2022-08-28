import { Stack, Text, VStack } from "@chakra-ui/react";
import ArticleSlide from "./articalSlide/ArticleSlide";

const NewUpdate = () => {
  return (
    <>
      <Stack
        alignSelf={"center"}
        spacing={{ md: "64px", sm: "32px" }}
        w={{ sm: "343px", md: "1216px" }}
      >
        <Text variant={{ md: "text28", sm: "text24" }}>Mới cập nhật</Text>
        <ArticleSlide />
      </Stack>
    </>
  );
};

export default NewUpdate;
