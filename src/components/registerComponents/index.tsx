import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form/dist/types";
import RegisterSuccess from "./register-success";

type Inputs = {
  name: string;
  phone: number;
  email: string;
  password: string;
  rePassword: string;
};

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleNameChange = (e: any) => setName(e.target.value);
  const handlePhoneChange = (e: any) => setPhone(e.target.value);
  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);
  const handleRePasswordChange = (e: any) => setRePassword(e.target.value);

  const isNameError = name.length <= 2;
  const isPhoneError = phone.length < 10;
  const isEmailError = email.includes("@");
  const isPasswordError = password.length < 8;
  const isRePasswordError = rePassword === password;

  // const schema= yup.object().shape({
  //     name: yup.string().required('name is required'),
  //     phone:  yup.number().required(),
  //     email: yup.string().required(),
  //     password: yup.string().required(),
  //     rePassword: yup.string().required(),
  // }).required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    // mode:'onSubmit',
    // reValidateMode:'onChange',
    // resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const onError: SubmitErrorHandler<Inputs> = (error) => {
    console.log("Error", error);
  };

  const handleEmpty = (str: any) => {
    if (str === "") {
      return true;
    }
    return false;
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
            <Text variant="text14" fontWeight="600" textColor="blue.primary" cursor="pointer">
              Đăng nhập ngay
            </Text>
          </Stack>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Stack spacing="16px">
            <FormControl isInvalid={isNameError || handleEmpty(name)}>
              <FormLabel>Họ và tên</FormLabel>
              <Input {...register("name", { minLength: 2 })} type="text" value={name} onChange={handleNameChange} />
              {/* {(errors.name) && (
                                    <FormErrorMessage>
                                        {name===''?'Vui lòng nhập thông tin vào ô trống.' :'Dữ liệu không hợp lệ. Họ và tên có độ dài từ 2-100 kí tự.' }
                                    </FormErrorMessage>)}  */}
              {handleEmpty(name) || isNameError === true ? (
                <FormErrorMessage>
                  {name === ""
                    ? "Vui lòng nhập thông tin vào ô trống."
                    : "Dữ liệu không hợp lệ. Họ và tên có độ dài từ 2-100 kí tự."}
                </FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl id="phone" isInvalid={handleEmpty(phone) || isPhoneError}>
              <FormLabel>Số điện thoại</FormLabel>
              <Input
                {...register("phone", { minLength: 8 })}
                type="number"
                value={phone}
                onChange={handlePhoneChange}
              />
              {handleEmpty(phone) || isPhoneError ? (
                <FormErrorMessage>
                  {phone === ""
                    ? "Vui lòng nhập thông tin vào ô trống."
                    : "Dữ liệu không hợp lệ. Số điện thoại phải bao gồm 10 chữ số"}
                </FormErrorMessage>
              ) : null}
              {/* { errors.phone && (
                                    <FormErrorMessage>
                                         {phone===''?'Vui lòng nhập thông tin vào ô trống.' :'Dữ liệu không hợp lệ. Số điện thoại phải bao gồm 10 chữ số' } 
                                    </FormErrorMessage>
                                )} */}
            </FormControl>

            <FormControl id="email" isInvalid={handleEmpty(email) || !isEmailError}>
              <FormLabel>Email</FormLabel>
              <Input {...register("email")} type="email" value={email} onChange={handleEmailChange} />
              {handleEmpty(email) || !isEmailError ? (
                <FormErrorMessage>
                  {email === "" ? "Vui lòng nhập thông tin vào ô trống." : "Email không đúng định dạng"}
                </FormErrorMessage>
              ) : null}
              {/* { errors.email && (
                                    <FormErrorMessage>
                                         {email===''?'Vui lòng nhập thông tin vào ô trống.' :'Email không đúng định dạng' } 
                                    </FormErrorMessage>
                                )} */}
            </FormControl>

            <FormControl id="password" isInvalid={handleEmpty(password) || isPasswordError}>
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
              {handleEmpty(password) || isPasswordError ? (
                <FormErrorMessage>
                  {handleEmpty(password)
                    ? "Vui lòng nhập thông tin vào ô trống."
                    : "Dữ liệu không hợp lệ. Mật khẩu có 8 kí tự, bao gồm chữ hoa, chữ thường và số."}
                </FormErrorMessage>
              ) : null}
              {/* { errors.password && (
                                    <FormErrorMessage>
                                         {password===''?'Vui lòng nhập thông tin vào ô trống.' :'Dữ liệu không hợp lệ. Mật khẩu có 8 kí tự, bao gồm chữ hoa, chữ thường và số.'} 
                                    </FormErrorMessage>
                                )} */}
            </FormControl>

            <FormControl id="rePassword" isInvalid={handleEmpty(rePassword) || !isRePasswordError}>
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
              {handleEmpty(rePassword) || !isRePasswordError ? (
                <FormErrorMessage>
                  {handleEmpty(rePassword) ? "Vui lòng nhập thông tin vào ô trống." : "Mật khẩu không trùng  khớp"}
                </FormErrorMessage>
              ) : null}
              {/* { errors.rePassword && (
                                    <FormErrorMessage>
                                         {rePassword===''? 'Vui lòng nhập thông tin vào ô trống.' :'Mật khẩu không trùng  khớp' } 
                                    </FormErrorMessage>
                                )} */}
            </FormControl>
            <Center>
              <RegisterSuccess />
            </Center>
          </Stack>
        </form>
      </Stack>
    </Center>
  );
};
