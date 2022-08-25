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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
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
      <Center height="96px">
        <Box bg="white" position="fixed" w="100%" zIndex="999999999">
          <Center>
            <Flex
              alignSelf={"center"}
              w={{ xl: "1200px", "2xl": "100%" }}
              h="96px"
              alignItems="center"
              justifyContent={"space-between"}
              px={{ xl: "20px", "2xl": "200px" }}
            >
              <Box>
                <Image src="/fulllogo.png"></Image>
              </Box>
              <HStack
                fontSize="14px"
                fontWeight="500"
                spacing="32px"
                alignItems={"center"}
              >
                <Link>Trang chủ</Link>
                <CategoryPolicy>{dataPolicy}</CategoryPolicy>
                <CategoryEvent>{dataEvent}</CategoryEvent>
                <CategoryCompany>{dataCompany}</CategoryCompany>
                <CategoryLibrary>{dataLibrary}</CategoryLibrary>
                <Link>Về chúng tôi</Link>
                <Link>Liên hệ</Link>
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
          </Center>
        </Box>
      </Center>
    </>
  );
};
export default Navbar;
