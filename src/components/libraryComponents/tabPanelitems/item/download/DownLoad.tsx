import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
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
import CompleteDownLoad from "./completeDownload/CompleteDownload";

export default function DownLoad({ docItem }: docProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button
        onClick={onOpen}
        variant="primary"
        rightIcon={<Image src="/download.svg" />}
      >
        Tải về
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ md: "xl", sm: "md" }}
      >
        <ModalOverlay />
        <ModalContent borderRadius="12px" padding="32px">
          <ModalHeader alignSelf="center">
            <VStack spacing="16px">
              <Text variant="text28">Tải tài liệu</Text>
              <Text variant="text14">
                Vui lòng điền thông tin để tiếp tục tải về
              </Text>
            </VStack>
          </ModalHeader>

          <ModalBody>
            <Stack>
              <FormControl isRequired>
                <FormLabel>Họ tên</FormLabel>
                <Input bg="brand.bgItemFile" borderRadius="6px" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input bg="brand.bgItemFile" borderRadius="6px" />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter alignSelf="center">
            <CompleteDownLoad docItem={docItem} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
