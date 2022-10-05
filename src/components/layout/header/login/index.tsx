import { ROUTE_REGISTER } from "@/src/common/constants/routes.constant";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

import LoginSuccess from "./login-success";

type Inputs = {
  email: string;
  password: string;
};

export const Login = () => {
  const modalLogin = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);

  const isEmailError = email.includes("@");

  const router = useViefRouter();
  const handleRouter = () => {
    router.push(ROUTE_REGISTER["en"]);
  };

  const handleEmpty = (str: any) => {
    if (str === "") {
      return true;
    }
    return false;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Box>
      <Button onClick={modalLogin.onOpen} variant="primary" w="128px">
        Đăng nhập
      </Button>

      <Modal isOpen={modalLogin.isOpen} onClose={modalLogin.onClose} isCentered size={{ md: "lg", sm: "md" }}>
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
                    handleRouter();
                    modalLogin.onClose();
                  }}
                >
                  Đăng kí ngay
                </Text>
              </Stack>
            </VStack>
          </ModalHeader>

          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack>
                <FormControl
                  id="email"
                  isInvalid={handleEmpty(email) || !isEmailError}
                  // isInvalid={errors.email}
                >
                  <FormLabel>Email</FormLabel>
                  <InputGroup flexDirection={"column"}>
                    <Input
                      {...register("email", { required: true })}
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    {handleEmpty(email) || !isEmailError ? (
                      <FormErrorMessage>
                        {email === "" ? "Vui lòng nhập thông tin vào ô trống." : "Email không đúng định dạng"}
                      </FormErrorMessage>
                    ) : null}

                    {/* {errors.email &&  (
                                        <FormErrorMessage>
                                            {email===''?'Vui lòng nhập thông tin vào ô trống.' :'Email không đúng định dạng'}                                    
                                        </FormErrorMessage>
                                        ) 
                                    }                                         */}
                  </InputGroup>
                </FormControl>
                <FormControl id="password" isInvalid={handleEmpty(password)}>
                  <FormLabel>Mật khẩu</FormLabel>
                  <InputGroup flexDirection={"column"}>
                    <Input
                      {...register("password", { required: true })}
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    {handleEmpty(password) ? (
                      <FormErrorMessage>Vui lòng nhập thông tin vào ô trống.</FormErrorMessage>
                    ) : null}
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
                    handleRouter();
                    modalLogin.onClose();
                  }}
                >
                  Quên mật khẩu?
                </Text>
                <Center>
                  <LoginSuccess />
                </Center>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
