import { background, Box, Image, Stack, Text } from "@chakra-ui/react";

const ItemSliderMaster = () => {
  return (
    <>
      <Box w="full" h="461x" px="16px">
        <Box bg="#F2F3F7">
          <Box>
            <Image
              h="full"
              width="full"
              objectFit={"cover"}
              src={"/master.png"}
            />
          </Box>
          <Box>
            <Stack px="16px" py="16px">
              <Text fontSize="20px" fontWeight="600">
                Ramus Nedergaard
              </Text>
              <Text fontSize="14px" fontWeight="500">
                Act Renewable
              </Text>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ItemSliderMaster;
