import { ROUTE_HOME, ROUTE_REGISTER } from "@/src/common/constants/routes.constant";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  ChakraProps,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VisuallyHiddenInput,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form/dist/types";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { schemaForgotPassword, schemaLogin } from "./schema";

type Inputs = {
  email: string;
  password: string;
};

export const Login = ({ ...styleProps }: ChakraProps) => {
  const modalLoginSuccess = useDisclosure();
  const modalLoginError = useDisclosure();
  const modalLogin = useDisclosure();

  const modalForgotPassword = useDisclosure();
  const modalForgotPasswordSuccess = useDisclosure();

  const [isErrorLogin, setIsErrorLogin] = useState<boolean>(false);
  const [isErrorForgotPassword, setIsErrorForgotPassword] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);

  const isEmailError = email.includes("@");

  const router = useViefRouter();
  const navigateToRegister = () => {
    router.push(ROUTE_REGISTER["en"]);
  };

  const navigateToHome = () => {
    router.push("/");
  };

  const navigateToHomeAuto = () => {
    setTimeout(() => {
      router.push("/");
      modalLoginSuccess.onClose();
    }, 3000);
  };

  const formLogin = useForm<Inputs>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(schemaLogin),
  });

  const formForgotPassword = useForm<Inputs>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(schemaForgotPassword),
  });

  const onSubmit: SubmitHandler<Inputs> = () => {
    setIsErrorLogin(false);
    modalLogin.onClose();
    modalLoginSuccess.onOpen();
    navigateToHomeAuto();
  };
  const onError: SubmitErrorHandler<Inputs> = () => {
    setIsErrorLogin(true);
    modalLoginError.onOpen();
  };

  const onSubmitForgotPassword: SubmitHandler<Inputs> = (data) => {
    setIsErrorForgotPassword(false);
    modalForgotPasswordSuccess.onOpen();
  };
  const onErrorForgotPassword: SubmitErrorHandler<Inputs> = () => {
    setIsErrorForgotPassword(true);
  };

  return (
    <Box>
      <Button onClick={modalLogin.onOpen} variant="primary" w="128px" overflow={"hidden"} {...styleProps}>
        Đăng nhập
      </Button>

      {/* Modal Login ------------------------------ */}
      <Modal
        isOpen={modalLogin.isOpen}
        onClose={modalLogin.onClose}
        isCentered
        size={{ md: "lg", sm: "md" }}
        id="login"
      >
        <ModalOverlay />
        <ModalContent borderRadius="12px" padding={{ md: "32px", sm: "16px" }} mx="16px">
          <ModalHeader alignSelf="center">
            <VStack spacing="16px">
              <Text variant="text28">Đăng nhập</Text>
              <Stack spacing="2px" direction="row">
                <Text variant="text14">Bạn chưa có tài khoản? </Text>
                <Text
                  variant="text14"
                  fontWeight="600"
                  textColor="blue.primary"
                  cursor="pointer"
                  onClick={() => {
                    navigateToRegister();
                    modalLogin.onClose();
                  }}
                >
                  Đăng kí ngay
                </Text>
              </Stack>
            </VStack>
          </ModalHeader>

          <ModalBody>
            <form onSubmit={formLogin.handleSubmit(onSubmit, onError)}>
              <Stack>
                <FormControl id="email" isInvalid={isErrorLogin && (!isEmailError || email === "")}>
                  <FormLabel>Email</FormLabel>
                  <InputGroup flexDirection={"column"}>
                    <Input {...formLogin.register("email")} type="text" value={email} onChange={handleEmailChange} />
                    {formLogin.formState && (
                      <FormErrorMessage>
                        {email === "" ? "Vui lòng nhập thông tin vào ô trống." : "Email không đúng định dạng"}
                      </FormErrorMessage>
                    )}
                  </InputGroup>
                </FormControl>
                <FormControl id="password" isInvalid={isErrorLogin && password === ""}>
                  <FormLabel>Mật khẩu</FormLabel>
                  <InputGroup flexDirection={"column"}>
                    <Input
                      {...formLogin.register("password")}
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    {formLogin.formState && (
                      <FormErrorMessage>
                        {password === "" ? "Vui lòng nhập thông tin vào ô trống." : null}
                      </FormErrorMessage>
                    )}
                    <InputRightElement>
                      <IconButton
                        aria-label=""
                        boxSize="small"
                        variant="ghost"
                        border="none"
                        _hover={{ bg: "none" }}
                        _active={{ bg: "none" }}
                        onClick={() => setShowPassword((showPassword) => !showPassword)}
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </IconButton>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Text
                  w="fit-content"
                  alignSelf="flex-end"
                  variant="text14"
                  fontWeight="600"
                  textColor="blue.primary"
                  cursor="pointer"
                  onClick={() => {
                    modalForgotPassword.onOpen();
                    modalLogin.onClose();
                  }}
                >
                  Quên mật khẩu?
                </Text>

                <Center>
                  <Box>
                    <Button type="submit" variant="primary">
                      Đăng nhập
                    </Button>
                  </Box>
                </Center>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Modal Login Success --------------------------------------------------------------------------*/}
      <Modal
        isOpen={modalLoginSuccess.isOpen}
        onClose={modalLoginSuccess.onClose}
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
              <Text variant="text28">Đăng nhập thành công</Text>
              <Text variant="text14" textAlign="center">
                Bạn sẽ tự động quay về Trang chủ sau 03 giây. Chọn Trang chủ nếu bạn không muốn đợi lâu
              </Text>
            </Stack>
          </ModalBody>
          <ModalFooter alignSelf="center">
            <Button
              variant="primary"
              onClick={() => {
                navigateToHome();
                modalLoginSuccess.onClose();
                modalLogin.onClose();
              }}
            >
              Trang chủ
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal Login Error --------------------------------------------------------------------------*/}
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
                Bạn sẽ tự động quay về Trang chủ sau 03 giây. Chọn Trang chủ nếu bạn không muốn đợi lâu
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

      {/* Modal forgot password -------------------------------------*/}
      <Modal isOpen={modalForgotPassword.isOpen} onClose={modalForgotPassword.onClose} isCentered size={"lg"}>
        <ModalOverlay />
        <ModalContent borderRadius="12px" padding={{ md: "32px", sm: "16px" }} mx="16px">
          <ModalHeader alignSelf="center">
            <VStack spacing="16px">
              <Text variant="text28">Quên mật khẩu</Text>
              <Text variant="text14" textAlign={"center"}>
                Nhập địa chỉ email bạn đã đăng ký và chúng tôi sẽ gửi cho bạn hướng dẫn để đặt lại mật khẩu mới.{" "}
              </Text>
            </VStack>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={formForgotPassword.handleSubmit(onSubmitForgotPassword, onErrorForgotPassword)}>
              <Stack spacing={"32px"}>
                <FormControl id="email" isInvalid={isErrorForgotPassword && (!isEmailError || email === "")}>
                  <FormLabel>Email</FormLabel>
                  <InputGroup flexDirection={"column"}>
                    <Input
                      {...formForgotPassword.register("email")}
                      type="text"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    {formForgotPassword.formState && (
                      <FormErrorMessage>
                        {email === "" ? "Vui lòng nhập thông tin vào ô trống." : "Email không đúng định dạng"}
                      </FormErrorMessage>
                    )}
                  </InputGroup>
                </FormControl>

                <Center>
                  <Box>
                    <Button type="submit" variant="primary">
                      Xác thực email
                    </Button>
                  </Box>
                </Center>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Modal Forgot password Success --------------------------------------------------------------------------*/}
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
              }}
            >
              Đã hiểu
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
