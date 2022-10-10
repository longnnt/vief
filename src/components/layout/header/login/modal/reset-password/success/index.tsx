import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Stack,
  Text,
  UseModalProps,
} from "@chakra-ui/react";

export const ResetSuccess = (modalResetPasswordSuccess: UseModalProps) => {
  const router = useViefRouter();
  const navigateToHome = () => {
    router.push("/");
  };
  return (
    <Modal
      isOpen={modalResetPasswordSuccess.isOpen}
      onClose={modalResetPasswordSuccess.onClose}
      isCentered
      size={{ md: "xl", sm: "md" }}
    >
      <ModalOverlay />
      <ModalContent borderRadius="12px" padding="32px" m={"16px"}>
        <ModalHeader alignSelf="center">
          <Box bgImage="/checkDownload.png" boxSize={"128px"}></Box>
        </ModalHeader>

        <ModalBody textAlign={"center"}>
          <Stack>
            <Text variant="text28">Đổi mật khẩu thành công</Text>
            <Text variant="text14" textAlign="center">
              Bạn sẽ tự động quay về Trang chủ sau 03 giây. Chọn Trang chủ nếu bạn không muốn đợi lâu
            </Text>
          </Stack>
        </ModalBody>
        <ModalFooter alignSelf="center">
          <Button
            variant="primary"
            onClick={() => {
              modalResetPasswordSuccess.onClose();
              navigateToHome();
            }}
          >
            Trang chủ
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default ResetSuccess;
