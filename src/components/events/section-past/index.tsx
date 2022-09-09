import { Pagination } from "@/src/common/components/pagination";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { SectionPastProps } from "../interface";
import SectionContent from "./section-content";

export default function SectionPast({ pastEvents }: SectionPastProps) {
  return (
    <Box>
      <Text variant="text28" mt="69px">
        Đã diễn ra
      </Text>
      <Box display="flex" mt="16px" mb="32px">
        <Button variant="primary">Ngành Gỗ</Button>
        <Button ml="30px">Ngành khác</Button>
      </Box>
      <SectionContent pastEvents={pastEvents} />
      <HStack w="full" justifyContent="center" mt="32px">
        <Pagination currentPage={5} totalPages={10} onPageChange={() => {}} />
      </HStack>
    </Box>
  );
}
