import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Stack,
  Text,
  UseModalProps,
} from "@chakra-ui/react";
import { FormModal } from "../../interfaces/common.interface";

type ModalStatusProps = {
  formModal: FormModal;
  modalStatus: UseModalProps;
};

export function ModalSuccess({ formModal, modalStatus }: ModalStatusProps) {
  const router = useViefRouter();
  const navigateToHome = () => {
    router.push("/");
  };
  return (
    <Modal isOpen={modalStatus.isOpen} onClose={modalStatus.onClose} isCentered size={{ md: "xl", sm: "md" }}>
      <ModalOverlay />
      <ModalContent borderRadius="12px" padding="32px" m={"16px"}>
        <ModalHeader alignSelf="center">
          <Box bgImage={formModal.img} boxSize={"128px"} />
        </ModalHeader>
        <ModalBody textAlign={"center"}>
          <Stack>
            <Text variant="text28">{formModal.title}</Text>
            <Text variant="text14" textAlign="center">
              {formModal.description}
            </Text>
          </Stack>
        </ModalBody>
        <ModalFooter alignSelf="center">
          <Button
            variant="primary"
            onClick={() => {
              modalStatus.onClose();
              navigateToHome();
            }}
          >
            {formModal.textButton}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export default ModalSuccess;
