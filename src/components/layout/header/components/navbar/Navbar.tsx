import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Select,
  ButtonGroup,
  Image,
  Center,
  Stack,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SmallAddIcon } from "@chakra-ui/icons";
import CategoryLibrary from "./MenuItem/CategoryLibrary";
import CategoryCompany from "./MenuItem/CategoryCompany";
import CategoryPolicy from "./MenuItem/CategoryPolicy";
import { Category } from "@/src/common/type/type";
import CategoryEvent from "./MenuItem/CategoryEvent";

const Navbar = ({
  dataPolicy,
  dataCompany,
  dataEvent,
  dataLibrary,
}: {
  dataPolicy?: Category;
  dataCompany?: Category;
  dataEvent?: Category;
  dataLibrary?: Category;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box w="100%" alignItems={"center"} position="fixed" zIndex="999999999">
        <Stack bg="white">
          <Flex
            alignSelf={"center"}
            w={{ sm: "343px", lg: "1390px", xl: "1200px", "2xl": "100%" }}
            px={{ base: "none", sm: "16px", xl: "20px", "2xl": "200px" }}
            alignItems="center"
            h={{ sm: "66px", md: "96px" }}
            justifyContent={"space-between"}
          >
            <Box>
              <Image src="/fulllogo.png"></Image>
            </Box>
            <HStack
              display={{ base: "none", md: "flex" }}
              fontSize="14px"
              fontWeight="500"
              spacing="32px"
              alignItems={"center"}
            >
              <Link href="/">Trang chủ</Link>
              <CategoryPolicy>{dataPolicy}</CategoryPolicy>
              <CategoryEvent>{dataEvent}</CategoryEvent>
              <CategoryCompany>{dataCompany}</CategoryCompany>
              <CategoryLibrary>{dataLibrary}</CategoryLibrary>
              <Link href="/about">Về chúng tôi</Link>
              <Link>Liên hệ</Link>
            </HStack>
            <Flex alignItems={"center"}>
              <Select variant={"unstyled"}>
                <option>VI</option>
                <option>EN</option>
              </Select>
              <ButtonGroup>
                <Link href="/" _hover={{ textDecoration: "none" }}>
                  <Button
                    bg="brand.100"
                    textColor="white"
                    display={{ base: "none", md: "flex" }}
                  >
                    Đăng nhập
                  </Button>
                </Link>
              </ButtonGroup>
              <IconButton
                aria-label={"Open Menu"}
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
            </Flex>
          </Flex>

          {isOpen ? (
            <Stack alignItems="flex-start" px="16px" py="16px">
              <Link href="/">Trang chủ</Link>
              <CategoryPolicy>{dataPolicy}</CategoryPolicy>
              <CategoryEvent>{dataEvent}</CategoryEvent>
              <CategoryCompany>{dataCompany}</CategoryCompany>
              <CategoryLibrary>{dataLibrary}</CategoryLibrary>
              <Link href="/about">Về chúng tôi</Link>
              <Link>Liên hệ</Link>
            </Stack>
          ) : null}
        </Stack>
      </Box>
    </>
  );
};
export default Navbar;
