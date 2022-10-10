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
  useDisclosure,
  UseModalProps,
} from "@chakra-ui/react";
import ResetPassword from "../../reset-password";

export const ForgotPasswordSuccess = ({
  modalForgotPasswordSuccess,
}: {
  modalForgotPasswordSuccess: UseModalProps;
}) => {
  const modalResetPassword = useDisclosure();
  return (
    <>
      <Modal
        isOpen={modalForgotPasswordSuccess.isOpen}
        onClose={modalForgotPasswordSuccess.onClose}
        isCentered
        size={"lg"}
      >
        <ModalOverlay />
        <ModalContent borderRadius="12px" padding="32px">
          <ModalHeader alignSelf="center">
            <Box bgImage="/checkDownload.png" boxSize={"128px"}></Box>
          </ModalHeader>

          <ModalBody textAlign={"center"} padding="0px">
            <Stack>
              <Text variant="text28">Xác nhận Email</Text>
              <Text variant="text14" textAlign="center">
                Nếu địa chỉ email này được sử dụng để tạo tài khoản, hướng dẫn đặt lại mật khẩu sẽ được gửi cho bạn. Vui
                lòng kiểm tra email của bạn.
              </Text>
            </Stack>
          </ModalBody>
          <ModalFooter alignSelf="center">
            <Button
              variant="primary"
              onClick={() => {
                modalForgotPasswordSuccess.onClose();
                modalResetPassword.onOpen();
              }}
            >
              Đã hiểu
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ResetPassword modalResetPassword={modalResetPassword} />
    </>
  );
};
export default ForgotPasswordSuccess;
