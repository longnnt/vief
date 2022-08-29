import { WebContainer } from "@/src/common/components/WebContainer";
import { Stack, Text } from "@chakra-ui/react";
import { InforPolicy } from "./inforPolicy/InforPolicy";
import NewUpdate from "./newUpdate/NewUpdate";

export const PolicyPage = () => {
  return (
    <WebContainer>
      <Stack
        mb={"64px"}
        pt={{ md: "64px", sm: "32px" }}
        spacing={{ md: "64px", sm: "32px" }}
      >
        <Text
          borderBottom={"solid 1.5px"}
          width="fit-content"
          alignSelf="center"
          variant="text20"
        >
          Chính sách
        </Text>

        <NewUpdate />
        <InforPolicy />
      </Stack>
    </WebContainer>
  );
};
