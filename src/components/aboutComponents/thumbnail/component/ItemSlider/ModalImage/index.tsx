import {
  ListImgProps,
  UnsplashImg,
} from "@/src/components/aboutComponents/interfaces";
import { CloseIcon } from "@chakra-ui/icons";
import {
  CloseButton,
  IconButton,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

import { ThumbnailGallery } from "./thumbGallery/ThumbnailsGallery";

type PictureItemProp = {
  itemImg: UnsplashImg;
  listImgThumb: UnsplashImg[];
};

export const ModalImage = ({ itemImg, listImgThumb }: PictureItemProp) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image
        align={"center"}
        h="full"
        w="full"
        alt=""
        borderRadius={"12px"}
        transitionDuration="0.2s"
        src={itemImg?.urls?.regular}
        objectFit="cover"
        _hover={{ transform: "scale(1.05)" }}
        onClick={onOpen}
        cursor="pointer"
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
        <ModalOverlay />
        <ModalOverlay />
        <ModalContent
          bg="transparent"
          borderRadius="12px"
          shadow={"none"}
          padding="10px"
          py="20%"
        >
          <ThumbnailGallery listImgThumb={listImgThumb} />
          <IconButton
            aria-label=""
            variant={"ghost"}
            isRound
            w={{ md: "24px", sm: "12px" }}
            border="2px"
            borderColor="white"
            position="absolute"
            onClick={onClose}
            right="8%"
            _hover={{ bg: "transparent" }}
          >
            <CloseIcon color="white" alignSelf="center" />
          </IconButton>
        </ModalContent>
      </Modal>
    </>
  );
};
