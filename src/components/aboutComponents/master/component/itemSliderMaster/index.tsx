import {
  background,
  Box,
  Image,
  Modal,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const abc = {
  bg: "#394160",
};

const ItemSliderMaster = () => {
  // const { isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Box w="full" h="461x" px="22px">
        <Box
          bg="#F2F3F7"
          _hover={{ bg: "#394160" }}
          className="itemMaster"
          role="group"
          position={"relative"}
          zIndex="0"
        >
          <Box
            w="full"
            h="374px"
            borderRadius="12px"
            bgImage="/master.png"
            bgSize="cover"
            _groupHover={abc}
          ></Box>
          <Stack px="16px" py="16px">
            <Text variant="text20">Ramus Nedergaard</Text>
            <Text variant="text14">Act Renewable</Text>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ItemSliderMaster;
