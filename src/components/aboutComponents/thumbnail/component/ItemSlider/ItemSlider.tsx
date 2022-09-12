import { Box, Image } from "@chakra-ui/react";
import {
  ListImgProps,
  PictureItemProp,
  unsplashImg,
} from "../../../interfaces";
import { ModalImage } from "./ModalImage";

const ItemSlider = ({ itemImg, listImgThumb }: PictureItemProp) => {
  return (
    <Box
      h={{ md: "288px", sm: "189px" }}
      alignSelf={"center"}
      px={{ md: "22px", sm: "12px" }}
    >
      <ModalImage itemImg={itemImg} listImgThumb={listImgThumb} />
    </Box>
  );
};

export default ItemSlider;
