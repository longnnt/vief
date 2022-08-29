import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import CompleteDownLoad from "./completeDownload/CompleteDownload";

export default function DownLoad() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button onClick={onOpen} variant="primary">
        Tải về
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ md: "xl", sm: "md" }}
      >
        <ModalOverlay />
        <ModalContent borderRadius="12px" padding="32px">
          <ModalHeader alignSelf="center">
            <VStack spacing="16px">
              <Text variant="text28">Tải tài liệu</Text>
              <Text variant="text14">
                Vui lòng điền thông tin để tiếp tục tải về
              </Text>
            </VStack>
          </ModalHeader>

          <ModalBody>
            <Stack>
              <Stack spacing="8px">
                <Text variant="text14">Họ tên</Text>
                <Input bg="brand.bgItemFile" borderRadius="6px"></Input>
              </Stack>
              <Stack spacing="8px">
                <Text variant="text14">Email</Text>
                <Input bg="brand.bgItemFile" borderRadius="6px"></Input>
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter alignSelf="center">
            <CompleteDownLoad handleClose={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
