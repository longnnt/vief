import { Box, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";

export const MessageFormError = ({ children }: { children: ReactNode }) => {
  return (
    <HStack alignItems="center" spacing="3.33px">
      <Box position={"relative"} boxSize="13.33px">
        <Image src="/icon-error.svg" layout="fill" objectFit="contain" />
      </Box>
      <Text variant={"textError"}>{children}</Text>
    </HStack>
  );
};
export default MessageFormError;
