import { Box, Image } from "@chakra-ui/react";
import ModalImage from "./ModalImage";

const ItemSlider = () => {
  return (
    <>
      <Box
        h={{ md: "288px", sm: "189px" }}
        alignSelf={"center"}
        px={{ md: "22px", sm: "12px" }}
      >
        <ModalImage />
      </Box>
    </>
  );
};

export default ItemSlider;
