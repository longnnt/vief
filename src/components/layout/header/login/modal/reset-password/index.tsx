import { FormForgotPassword, FormResetPassword } from "@/src/components/layout/interfaces";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  UseModalProps,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { schemaForgotPassword, schemaResetPassword } from "../../schema";
import { ResetSuccess } from "./success";

export const ResetPassword = (modalResetPassword: UseModalProps) => {
  const modalResetPasswordSuccess = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormResetPassword>({
    resolver: yupResolver(schemaResetPassword),
  });

  const onSubmitForgotPassword: SubmitHandler<FormResetPassword> = () => {
    modalResetPasswordSuccess.onOpen();
    modalResetPassword.onClose();
  };
  const onErrorForgotPassword: SubmitErrorHandler<FormResetPassword> = () => {};

  return (
    <>
      <Modal isOpen={modalResetPassword.isOpen} onClose={modalResetPassword.onClose} isCentered size={"lg"}>
        <ModalOverlay />
        <ModalContent borderRadius="12px" padding={{ md: "32px", sm: "16px" }} mx="16px">
          <ModalHeader alignSelf="center">
            <Text variant="text28">Đặt lại mật khẩu</Text>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmitForgotPassword, onErrorForgotPassword)}>
              <Stack spacing={"16px"}>
                <FormControl id="password">
                  <FormLabel>Mật khẩu mới</FormLabel>
                  <Input {...register("password")} type="password" />
                  <Text variant={"textHelper"}>Mật khẩu có 8 kí tự, bao gồm chữ hoa, chữ thường và số.</Text>
                  {errors.password && <Text variant={"textError"}>{errors.password?.message}</Text>}
                </FormControl>
                <FormControl id="confirmPassword">
                  <FormLabel>Nhập lại mật khẩu</FormLabel>
                  <Input {...register("confirmPassword")} type="password" />
                  {errors.confirmPassword && <Text variant={"textError"}>{errors.confirmPassword?.message}</Text>}
                </FormControl>
                <Center>
                  <Box>
                    <Button type="submit" variant="primary">
                      Đổi mật khẩu
                    </Button>
                  </Box>
                </Center>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <ResetSuccess isOpen={modalResetPasswordSuccess.isOpen} onClose={modalResetPasswordSuccess.onClose} />
    </>
  );
};
export default ResetPassword;
