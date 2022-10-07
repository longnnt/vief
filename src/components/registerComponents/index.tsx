import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
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
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form/dist/types";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Login } from "../layout/header/login";
import { passwordRegex, schemaRegister } from "./schema";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";

type Inputs = {
  name: string;
  phone: number;
  email: string;
  password: string;
  rePassword: string;
};

export const Register = () => {
  const modalSuccess = useDisclosure();
  const modalError = useDisclosure();
  const router = useViefRouter();

  const [isErrors, setIsErrors] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRePassword, setShowRePassword] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");

  const handleNameChange = (e: any) => setName(e.target.value);
  const handlePhoneChange = (e: any) => setPhone(e.target.value);
  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);
  const handleRePasswordChange = (e: any) => setRePassword(e.target.value);

  const isNameError = name.length < 2;
  const isPhoneError = phone.length < 10;
  const isEmailError = email.includes("@");
  const isPasswordError = passwordRegex.test(password);
  const isRePasswordError = rePassword === password;

  const navigateToHomeAuto = () => {
    setTimeout(() => {
      router.push("/");
      modalSuccess.onClose();
    }, 3000);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(schemaRegister),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsErrors(false);
    modalSuccess.onOpen();
    navigateToHomeAuto();
  };

  const onError: SubmitErrorHandler<Inputs> = (error) => {
    setIsErrors(true);
    modalError.onOpen();
  };

  return (
    <Center
      w="full"
      bg="white"
      h="full"
      bgImg={"/bgHome.png"}
      backgroundSize="cover"
      backgroundPosition={"center"}
      px="16px"
    >
      <Stack w="500px" bg="white" padding={"32px"} borderRadius="12px" spacing="32px">
        <Stack alignItems={"center"} spacing="16px">
          <Text variant={"text28"}>Đăng ký</Text>

          <Stack spacing="2px" direction="row">
            <Text variant="text14">Bạn đã có tài khoản? </Text>
            <Login
              sx={{
                bg: "transparent",
                textColor: "blue.primary",
                _hover: "none",
                _active: "none",
                w: "fit-content",
                h: "fit-content",
                px: "0px",
              }}
            />
          </Stack>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Stack spacing="32px">
            <Stack spacing="16px">
              <FormControl id="name" isInvalid={isErrors && isNameError}>
                <FormLabel>Họ và tên</FormLabel>
                <Input {...register("name")} type="text" value={name} onChange={handleNameChange} />
                {errors && (
                  <FormErrorMessage>
                    {name === ""
                      ? "Vui lòng nhập thông tin vào ô trống."
                      : "Dữ liệu không hợp lệ. Họ và tên có độ dài từ 2-100 kí tự."}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl id="phone" isInvalid={isErrors && isPhoneError}>
                <FormLabel>Số điện thoại</FormLabel>
                <Input {...register("phone")} type="number" value={phone} onChange={handlePhoneChange} />

                {errors && errors.phone && (
                  <FormErrorMessage>
                    {phone === ""
                      ? "Vui lòng nhập thông tin vào ô trống."
                      : "Dữ liệu không hợp lệ. Số điện thoại phải bao gồm 10 chữ số"}
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl id="email" isInvalid={isErrors && (email === "" || !isEmailError)}>
                <FormLabel>Email</FormLabel>
                <Input {...register("email")} type="text" value={email} onChange={handleEmailChange} />

                {errors && (
                  <FormErrorMessage>
                    {email === "" ? "Vui lòng nhập thông tin vào ô trống." : "Email không đúng định dạng"}
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl id="password" isInvalid={isErrors && !isPasswordError}>
                <FormLabel>Mật khẩu</FormLabel>
                <InputGroup>
                  <Input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                  />
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

                {errors && errors.password && (
                  <FormErrorMessage>
                    {password === ""
                      ? "Vui lòng nhập thông tin vào ô trống."
                      : "Dữ liệu không hợp lệ. Mật khẩu có 8 kí tự, bao gồm chữ hoa, chữ thường và số."}
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl id="rePassword" isInvalid={isErrors && (rePassword === "" || !isRePasswordError)}>
                <FormLabel>Nhập lại mật khẩu</FormLabel>
                <InputGroup>
                  <Input
                    {...register("rePassword")}
                    type={showRePassword ? "text" : "password"}
                    value={rePassword}
                    onChange={handleRePasswordChange}
                  />

                  <InputRightElement>
                    <IconButton
                      aria-label=""
                      boxSize="small"
                      variant="ghost"
                      border="none"
                      _hover={{ bg: "none" }}
                      _active={{ bg: "none" }}
                      onClick={() => setShowRePassword((showRePassword) => !showRePassword)}
                    >
                      {showRePassword ? <ViewIcon /> : <ViewOffIcon />}
                    </IconButton>
                  </InputRightElement>
                </InputGroup>

                {errors && (
                  <FormErrorMessage>
                    {rePassword === "" ? "Vui lòng nhập thông tin vào ô trống." : "Mật khẩu không trùng  khớp"}
                  </FormErrorMessage>
                )}
              </FormControl>
            </Stack>
            <Center>
              <Button type="submit" variant="primary">
                Đăng ký
              </Button>

              {/* modalSuccess */}
              <Modal
                isOpen={modalSuccess.isOpen}
                onClose={modalSuccess.onClose}
                isCentered
                size={{ md: "xl", sm: "md" }}
              >
                <ModalContent borderRadius="12px" padding="32px" boxShadow="lg">
                  <ModalHeader alignSelf="center">
                    <Box bgImage="/checkDownload.png" boxSize={"128px"}></Box>
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

              {/* modal Error */}
              <Modal isOpen={modalError.isOpen} onClose={modalError.onClose} isCentered size={{ md: "xl", sm: "md" }}>
                <ModalContent borderRadius="12px" padding="32px" boxShadow="lg">
                  <ModalHeader alignSelf="center">
                    <Box bgImage="/error-img.svg" boxSize={"128px"}></Box>
                  </ModalHeader>

                  <ModalBody textAlign={"center"}>
                    <Stack>
                      <Text variant="text28">Đăng kí thất bại</Text>
                      <Text variant="text14" textAlign={"center"}>
                        In sem facilisis vulputate diam. Donec orci dolor, morbi velit non ac ac integer quam. Vel
                        pellentesque.
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
            </Center>
          </Stack>
        </form>
      </Stack>
    </Center>
  );
};
