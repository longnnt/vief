import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Select,
  Stack,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import CategoryLibrary from "./MenuItem/CategoryLibrary";
import CategoryCompany from "./MenuItem/CategoryCompany";
import CategoryPolicy from "./MenuItem/CategoryPolicy";
import { Category } from "@/src/common/type/type";
import CategoryEvent from "./MenuItem/CategoryEvent";

const Links = [
  "Trang chủ",
  "Chính sách",
  "Sự kiện",
  "Doanh nghiệp",
  "Thư viện",
  "Về chúng tôi",
  "Liên Hệ",
];

const Navbar = ({
  dataPolicy,
  dataCompany,
  dataEvent,
  dataLibrary,
}: {
  dataPolicy: Category;
  dataCompany: Category;
  dataEvent: Category;
  dataLibrary: Category;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="white" position="fixed" w="100%" zIndex="999999999">
        <Flex
          px={"11%"}
          h={16}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            color="brand.100"
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>
            <Image src="/fulllogo.png"></Image>
          </Box>
          <HStack
            fontSize="14px"
            fontWeight="500"
            spacing="32px"
            alignItems={"center"}
            display={{ base: "none", md: "flex" }}
          >
            <Link>{Links[0]}</Link>
            <CategoryPolicy>{dataPolicy}</CategoryPolicy>
            <CategoryEvent>{dataEvent}</CategoryEvent>
            <CategoryCompany>{dataCompany}</CategoryCompany>
            <CategoryLibrary>{dataLibrary}</CategoryLibrary>
            <Link>{Links[5]}</Link>
            <Link>{Links[6]}</Link>
          </HStack>
          <Flex alignItems={"center"}>
            <Select variant={"unstyled"}>
              <option>VI</option>
              <option>EN</option>
            </Select>
            <ButtonGroup>
              <Link href="/" _hover={{ textDecoration: "none" }}>
                <Button bg="brand.100" textColor="white">
                  Đăng ký
                </Button>
              </Link>
            </ButtonGroup>
          </Flex>
        </Flex>

        {isOpen ? (
          <>
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4} alignItems="center">
                <Link>
                  <Button>{Links[0]}</Button>
                </Link>
                <Button>
                  <CategoryPolicy>{dataPolicy}</CategoryPolicy>
                </Button>
                <CategoryEvent>{dataEvent}</CategoryEvent>
                <CategoryCompany>{dataCompany}</CategoryCompany>
                <CategoryLibrary>{dataLibrary}</CategoryLibrary>
                <Link>{Links[5]}</Link>
                <Link>{Links[6]}</Link>
              </Stack>
            </Box>
          </>
        ) : null}
      </Box>
    </>
  );
};
export default Navbar;
