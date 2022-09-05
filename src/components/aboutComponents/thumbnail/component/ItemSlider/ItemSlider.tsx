import { Box, Image } from "@chakra-ui/react";
import ModalImage from "./ModalImage/ModalImage";

const ItemSlider = () => {
  return (
    <>
      <Box
        w={{ md: "345px", sm: "252px" }}
        h={{ md: "228px", sm: "189px" }}
        // w='full'
        // h='full'
        padding="10px"
      >
        <ModalImage />
      </Box>
    </>
  );
};

export default ItemSlider;
