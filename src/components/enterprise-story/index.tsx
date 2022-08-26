import { WebContainer } from "@/src/common/components/WebContainer";
import { Text, VStack } from "@chakra-ui/react";
import { MainArticles } from "./components/MainArticles";
import { Outstanding } from "./components/Outstanding";

function EnterpriseStory() {
  return (
    <WebContainer>
      <VStack spacing="64px" mb="64px">
        <Text
          m="auto"
          w="fit-content"
          mt="32px"
          variant={{
            sm: "text16",
            base: "text20",
          }}
          borderBottom="1.5px solid #394160"
        >
          Chuyện doanh nghiệp
        </Text>
        <MainArticles />
        <Outstanding />
      </VStack>
    </WebContainer>
  );
}

export { EnterpriseStory };
