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
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export default function LoginSuccess() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useViefRouter();
  const handleRouter = () => {
    router.push("/");
  };

  return (
    <Box>
      <Button
        type="submit"
        onClick={() => {
          onOpen();
        }}
        variant="primary"
      >
        Đăng nhập
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ md: "xl", sm: "md" }}>
        <ModalContent borderRadius="12px" padding="32px">
          <ModalHeader alignSelf="center">
            <Box bgImage="url(/checkDownload.png)" boxSize={"128px"}></Box>
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
                handleRouter();
                onClose();
              }}
            >
              Trang chủ
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
