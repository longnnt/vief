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
  UseModalProps,
} from "@chakra-ui/react";
import { FormModal } from "../../interfaces/common.interface";

type ModalStatusProps = {
  formModal: FormModal;
  modalStatus: UseModalProps;
};

export function ModalError({ formModal, modalStatus }: ModalStatusProps) {
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
            }}
          >
            {formModal.textButton}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export default ModalError;
