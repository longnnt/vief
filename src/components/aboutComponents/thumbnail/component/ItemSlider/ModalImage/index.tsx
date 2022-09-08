import {
  Box,
  Button,
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
import ThumbnailGallery from "./thumbGallery/ThumbnailsGallery";

export default function ModalImage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image
        position="relative"
        borderRadius="8px"
        h="100%"
        alt=""
        transitionDuration="0.2s"
        src="/bgHome.png"
        objectFit="cover"
        _hover={{ transform: "scale(1.05)" }}
        onClick={onOpen}
      />

      <Modal
        // w='100%'
        // h='100%'
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        // size={{ md: "2xl", sm: "xl" }}
        size="6xl"
      >
        <ModalOverlay />
        <ModalContent bg="transparent" borderRadius="12px" padding="10px">
          <ThumbnailGallery />
        </ModalContent>
      </Modal>
    </>
  );
}
