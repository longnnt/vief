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

export default function CompleteDownLoad({ handleClose }: any) {
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
        <ModalContent borderRadius="12px" padding="32px">
          <ModalHeader alignSelf="center">
            <Box bgImage="url(/checkDownload.png)" boxSize={"128px"}></Box>
          </ModalHeader>

          <ModalBody textAlign={"center"}>
            <Stack>
              <Text variant="text28">Tải tài liệu</Text>
              <Text variant="text14">
                Sit eu, faucibus ut eros maecenas nunc tristique. Phasellus
                amet, enim duis turpis praesent. Id volutpat quis et tristique
                facilisis. Neque nisi etiam justo nunc.
              </Text>
            </Stack>
          </ModalBody>

          <ModalFooter alignSelf="center">
            <Button variant="primary" onClick={onClose}>
              Quay lại trang
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
