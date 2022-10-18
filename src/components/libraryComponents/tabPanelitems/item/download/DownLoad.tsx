import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import { DownloadIcon } from "@chakra-ui/icons";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { docProps } from "../../../interfaces";
import React, { useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaDownload } from "../../../schema";
import { RiErrorWarningLine } from "react-icons/ri";
import Image from "next/image";
import MessageFormError from "@/src/common/components/message-error";
import { formModalDownloadSuccess } from "@/src/common/constants/formModal.constant";
import ModalStatus from "@/src/common/components/modal/status";
import { getLinkDownloadFile } from "../../../services";
import { getParamSearchFile } from "../../../contants";

type FormDownload = {
  email: string;
  name: string;
};

export default function DownLoad({ docItem }: docProps) {
  const modalDownload = useDisclosure();
  const modalDownloadSuccess = useDisclosure();
  const router = useViefRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDownload>({
    resolver: yupResolver(schemaDownload),
  });
  const onSubmit: SubmitHandler<FormDownload> = () => {
    modalDownloadSuccess.onOpen();
    handleGetLinkDownload();
  };
  const onError: SubmitErrorHandler<FormDownload> = () => {};

  async function handleGetLinkDownload() {
    const fileDownload = await getLinkDownloadFile(getParamSearchFile({ key: docItem?.file?.key }));
    handleDownloadFile(fileDownload);
  }

  const handleDownloadFile = (file: any) => {
    router.push(file?.url);
  };

  return (
    <Box>
      <Button
        onClick={modalDownload.onOpen}
        variant="primary"
        alignItems={"center"}
        overflow="hidden"
        rightIcon={<DownloadIcon />}
      >
        Tải về
      </Button>

      <Modal isOpen={modalDownload.isOpen} onClose={modalDownload.onClose} isCentered size={{ md: "xl", sm: "md" }}>
        <ModalOverlay />
        <ModalContent borderRadius="12px" padding="32px">
          <ModalHeader alignSelf="center">
            <VStack spacing="16px">
              <Text variant="text28">Tải tài liệu</Text>
              <Text variant="text14">Vui lòng điền thông tin để tiếp tục tải về</Text>
            </VStack>
          </ModalHeader>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <ModalBody>
              <Stack>
                <FormControl>
                  <FormLabel>Họ tên</FormLabel>
                  <Input {...register("name")} />
                  {errors.name && <MessageFormError>{errors.name.message}</MessageFormError>}
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input {...register("email")} />
                  {errors.email && <MessageFormError>{errors.email.message}</MessageFormError>}
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter justifyContent={"center"}>
              <Button type="submit" variant={"primary"}>
                Tải về
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      <ModalStatus formModal={formModalDownloadSuccess} modalStatus={modalDownloadSuccess} />
      {/* <CompleteDownLoad docItem={docItem} /> */}
    </Box>
  );
}
