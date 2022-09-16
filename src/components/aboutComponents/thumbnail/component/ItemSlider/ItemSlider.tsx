import { Box } from "@chakra-ui/react";
import { PictureItemProp } from "../../../interfaces";
import { ModalImage } from "./ModalImage";

const ItemSlider = ({ itemImg, listImgThumb }: PictureItemProp) => {
  return (
    <Box h={{ md: "288px", sm: "189px" }} px={{ md: "22px", sm: "12px" }}>
      <ModalImage itemImg={itemImg} listImgThumb={listImgThumb} />
    </Box>
  );
};

export default ItemSlider;
