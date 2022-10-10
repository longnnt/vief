import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  UseModalProps,
} from "@chakra-ui/react";

export const LoginError = (modalLoginError: UseModalProps) => {
  return (
    <Modal isOpen={modalLoginError.isOpen} onClose={modalLoginError.onClose} isCentered size={{ md: "xl", sm: "md" }}>
      <ModalOverlay />
      <ModalContent borderRadius="12px" padding="32px">
        <ModalHeader alignSelf="center">
          <Box bgImage="/error-img.svg" boxSize={"128px"}></Box>
        </ModalHeader>

        <ModalBody textAlign={"center"}>
          <Stack>
            <Text variant="text28">Đăng nhập thất bại</Text>
            <Text variant="text14" textAlign="center">
              Email hoặc mật khẩu không trùng khớp, vui lòng kiểm tra lại thông tin đăng nhập
            </Text>
          </Stack>
        </ModalBody>
        <ModalFooter alignSelf="center">
          <Button
            variant="primary"
            onClick={() => {
              modalLoginError.onClose();
            }}
          >
            Thử lại
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default LoginError;
