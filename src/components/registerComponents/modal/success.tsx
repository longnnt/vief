import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  Stack,
  Text,
  UseModalProps,
} from "@chakra-ui/react";

export const RegisterSuccess = (modalSuccess: UseModalProps) => {
  return (
    <Modal isOpen={modalSuccess.isOpen} onClose={modalSuccess.onClose} isCentered size={{ md: "xl", sm: "md" }}>
      <ModalContent borderRadius="12px" padding="32px" boxShadow="lg">
        <ModalHeader alignSelf="center">
          <Box bgImage="/checkDownload.png" boxSize={"128px"} />
        </ModalHeader>

        <ModalBody textAlign={"center"}>
          <Stack>
            <Text variant="text28">Đăng kí thành công</Text>
            <Text variant="text14" textAlign={"center"}>
              Bạn sẽ tự động quay về Trang chủ sau 03 giây. Chọn Trang chủ nếu bạn không muốn đợi lâu
            </Text>
          </Stack>
        </ModalBody>
        <ModalFooter alignSelf="center">
          <Button variant="primary" onClick={modalSuccess.onClose}>
            Trang chủ
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default RegisterSuccess;
