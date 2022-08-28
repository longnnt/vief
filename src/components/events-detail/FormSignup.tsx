import { Flex, FormLabel, Heading, Input } from "@chakra-ui/react";
import React from "react";
import ButtonEventComponent from "../events/components/Button";
import { FormSignupProps } from "./interface";

export default function FormSignup({ isExpired }: FormSignupProps) {
  return (
    <Flex
      w={{ base: "448px", sm: "100%" }}
      p="32px"
      boxShadow="0px 0px 16px rgba(0, 0, 0, 0.1)"
      borderRadius={"12px"}
      flexDirection={"column"}
      h="fit-content"
    >
      <Heading fontSize={"28px"} lineHeight="42px" textAlign={"center"}>
        Đăng ký
      </Heading>
      <FormLabel mb="0" mt="32px">
        Họ và tên
      </FormLabel>
      <Input
        type={"text"}
        mt="8px"
        bg={"white.secondary"}
        disabled={isExpired ? true : false}
      />
      <FormLabel mb="0" mt="16px">
        Số điện thoại
      </FormLabel>
      <Input
        type={"number"}
        mt="8px"
        bg={"white.secondary"}
        disabled={isExpired ? true : false}
      />
      <FormLabel mb="0" mt="16px">
        Email
      </FormLabel>
      <Input
        type={"email"}
        mt="8px"
        bg={"white.secondary"}
        disabled={isExpired ? true : false}
      />
      <ButtonEventComponent
        wrapperStyle={{ m: "0 auto", mt: "32px", mr: "auto", w: "132px" }}
        btnTitle="Đăng ký"
        isDisabled={isExpired ? true : false}
      />
    </Flex>
  );
}
