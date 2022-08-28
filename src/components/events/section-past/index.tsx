import { Pagination } from "@/src/common/components/pagination";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import SectionContent from "./section-content";

export default function SectionPast() {
  return (
    <Box>
      <Text variant="text28" my="32px">
        Đã diễn ra
      </Text>
      <Box display="flex" my="32px">
        <Button variant="primary">Ngành Gỗ</Button>
        <Button ml="30px">Ngành khác</Button>
      </Box>
      <SectionContent />
      <HStack w="full" justifyContent="center" mt="32px">
        <Pagination currentPage={5} totalPages={10} onPageChange={() => {}} />
      </HStack>
    </Box>
  );
}
