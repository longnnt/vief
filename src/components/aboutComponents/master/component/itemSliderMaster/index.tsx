import {
  background,
  Box,
  Image,
  Modal,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const ItemSliderMaster = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box w="full" h="461x" px="22px">
        <Box
          bg="#F2F3F7"
          role="group"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          position="relative"
          zIndex="0"
        >
          <Box
            w="full"
            h="374px"
            borderRadius="12px"
            bgImage="/master.png"
            bgSize="cover"
            // onMouseEnter={handleHover}
          >
            {isOpen ? (
              <>
                <Box
                  borderRadius="12px"
                  w="full"
                  position="absolute"
                  zIndex="1"
                  h="full"
                  bg="#394160"
                  opacity="0.9x"
                  p={"95px 16px 16px"}
                >
                  <Text variant="text14" overflow="hidden" color="white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the.Lorem Ipsum
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the.Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the
                  </Text>
                </Box>
              </>
            ) : null}
          </Box>

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
