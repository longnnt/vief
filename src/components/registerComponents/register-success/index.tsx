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

export default function RegisterSuccess() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useViefRouter();

  const handleRouter = () => {
    router.push("/");
  };

  return (
    <>
      <Button
        type="submit"
        onClick={() => {
          onOpen();
        }}
        variant="primary"
      >
        Đăng ký
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ md: "xl", sm: "md" }}>
        <ModalContent borderRadius="12px" padding="32px" boxShadow="lg">
          <ModalHeader alignSelf="center">
            <Box bgImage="url(/checkDownload.png)" boxSize={"128px"}></Box>
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
            <Button variant="primary" onClick={handleRouter}>
              Trang chủ
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
