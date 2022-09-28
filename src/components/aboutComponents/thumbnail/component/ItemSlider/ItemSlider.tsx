import { Box } from "@chakra-ui/react";
import { PictureItemProp } from "../../../interfaces";
import { ModalImage } from "./ModalImage";

const ItemSlider = ({ itemImg, listImgThumb }: PictureItemProp) => {
  return (
    <Box
      h={{ md: "288px", sm: "189px" }}
      transitionDuration="0.2s"
      _hover={{ transform: "scale(1.05)" }}
      cursor="pointer"
      position="relative"
      border={"16px solid transparent"}
    >
      <ModalImage itemImg={itemImg} listImgThumb={listImgThumb} />
    </Box>
  );
};

export default ItemSlider;
