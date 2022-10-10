import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Stack,
  Text,
  UseModalProps,
} from "@chakra-ui/react";

export const RegisterError = (modalError: UseModalProps) => {
  return (
    <Modal isOpen={modalError.isOpen} onClose={modalError.onClose} isCentered size={{ md: "xl", sm: "md" }}>
      <ModalContent borderRadius="12px" padding="32px" boxShadow="lg">
        <ModalHeader alignSelf="center">
          <Box bgImage="/error-img.svg" boxSize={"128px"}></Box>
        </ModalHeader>

        <ModalBody textAlign={"center"}>
          <Stack>
            <Text variant="text28">Đăng kí thất bại</Text>
            <Text variant="text14" textAlign={"center"}>
              In sem facilisis vulputate diam. Donec orci dolor, morbi velit non ac ac integer quam. Vel pellentesque.
            </Text>
          </Stack>
        </ModalBody>
        <ModalFooter alignSelf="center">
          <Button variant="primary" onClick={modalError.onClose}>
            Thử lại
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default RegisterError;
