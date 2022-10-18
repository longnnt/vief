import MessageFormError from "@/src/common/components/message-error";
import ModalStatus from "@/src/common/components/modal/status";
import { formModalSubmitContactSuccess } from "@/src/common/constants/formModal.constant";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import { Box, Button, FormControl, FormLabel, Input, Stack, Text, Textarea, useDisclosure } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { SubmitErrorHandler, useForm, SubmitHandler } from "react-hook-form";
import { schemaContact } from "../schema";

type FormContact = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const router = useViefRouter();
  const modalSuccess = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormContact>({
    resolver: yupResolver(schemaContact),
  });
  const onSubmit: SubmitHandler<FormContact> = () => {
    modalSuccess.onOpen();
  };
  const onError: SubmitErrorHandler<FormContact> = () => {};

  return (
    <>
      <Box>
        <Stack spacing="32px">
          <Stack spacing="16px" w={{ md: "592px", sm: "full" }} alignSelf="center">
            <Text align="center" variant={{ md: "text28", sm: "text24" }}>
              Liên Hệ
            </Text>
            <Text textAlign="center" variant="text14">
              Vulputate sem volutpat cras senectus lorem massa volutpat pellentesque dui. Tortor, pretium sed at
              hendrerit justo. Facilisis condimentum ultrices fermentum
            </Text>
          </Stack>

          <Stack direction={{ sm: "column", md: "row" }} spacing="32px">
            <Box
              w={{ md: "592px", sm: "full" }}
              h={{ md: "444px", sm: "257.25px" }}
              position="relative"
              overflow="hidden"
              borderRadius="12px"
            >
              <Image src="/researchIMG.png" layout="fill" objectFit={"cover"} alt="" />
            </Box>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <Stack spacing="16px" w={{ md: "592px", sm: "full" }} alignSelf="flex-start">
                <FormControl>
                  <FormLabel>Họ và tên</FormLabel>
                  <Input {...register("name")} />
                  {errors.name && <MessageFormError>{errors.name.message}</MessageFormError>}
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input {...register("email")} />
                  {errors.email && <MessageFormError>{errors.email?.message}</MessageFormError>}
                </FormControl>
                <FormControl>
                  <FormLabel>Lời nhắn</FormLabel>
                  <Textarea
                    {...register("message")}
                    focusBorderColor="focusBorder"
                    bg="inputBg"
                    _focus={{ bg: "white" }}
                    height="120px"
                  />
                  {errors.message && <MessageFormError>{errors.message?.message}</MessageFormError>}
                </FormControl>
                <Box>
                  <Button w="132px" type="submit" variant="primary">
                    Gửi
                  </Button>
                </Box>
              </Stack>
            </form>
          </Stack>
        </Stack>
        <ModalStatus formModal={formModalSubmitContactSuccess} modalStatus={modalSuccess} />
      </Box>
    </>
  );
};

export default Contact;
