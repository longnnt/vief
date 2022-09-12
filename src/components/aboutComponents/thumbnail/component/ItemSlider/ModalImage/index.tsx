import {
  ListImgProps,
  unsplashImg,
} from "@/src/components/aboutComponents/interfaces";
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
import { useState } from "react";
import { ThumbnailGallery } from "./thumbGallery/ThumbnailsGallery";

type PictureItemProp = {
  itemImg: unsplashImg;
  listImgThumb: unsplashImg[];
};

export const ModalImage = ({ itemImg, listImgThumb }: PictureItemProp) => {
  const [itemClick, setItemClick] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image
        align={"center"}
        borderRadius="8px"
        h="full"
        w="full"
        alt=""
        transitionDuration="0.2s"
        src={itemImg?.urls.regular}
        objectFit="cover"
        _hover={{ transform: "scale(1.02)" }}
        onClick={onOpen}
        cursor="pointer"
      />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ md: "6xl", sm: "lg" }}
      >
        <ModalOverlay />
        <ModalContent bg="transparent" borderRadius="12px" padding="10px">
          <ThumbnailGallery listImgThumb={listImgThumb} />
        </ModalContent>
      </Modal>
    </>
  );
};
