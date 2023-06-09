import { ROUTE_ABOUT, ROUTE_HOME } from "@/src/common/constants/routes.constant";
import { useTranslation } from "@/src/common/hooks/useTranslation";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Login } from "../../../login";
import CategoryCompany from "../MenuItem/CategoryCompany";
import CategoryEvent from "../MenuItem/CategoryEvent";
import CategoryLibrary from "../MenuItem/CategoryLibrary";
import CategoryPolicy from "../MenuItem/CategoryPolicy";

export default function NavbarMenu() {
  const drawerNavbar = useDisclosure();

  const { t } = useTranslation();

  const router = useViefRouter();
  const handleRouter = (children: any) => {
    router.push(children);
  };

  return (
    <>
      <IconButton
        aria-label={"Open Menu"}
        size="md"
        icon={drawerNavbar.isOpen ? <CloseIcon /> : <HamburgerIcon />}
        display={{ sm: "block", md: "none" }}
        onClick={drawerNavbar.isOpen ? drawerNavbar.onClose : drawerNavbar.onOpen}
        variant="ghost"
        border="none"
      />
      <Drawer isOpen={drawerNavbar.isOpen} placement="left" onClose={drawerNavbar.onClose}>
        <DrawerOverlay />
        <DrawerContent zIndex="1001" w="311px">
          <DrawerCloseButton
            border="1px solid #C5CAD3"
            borderRadius="full"
            boxSize="24px"
            padding="2px"
            color="#C5CAD3"
          />
          <DrawerHeader borderBottomWidth="1px">
            <Login />
          </DrawerHeader>

          <DrawerBody>
            <Stack alignItems="flex-start" fontSize="14px" fontWeight="500" onClick={drawerNavbar.onClose}>
              <Text onClick={() => handleRouter(ROUTE_HOME.en)} variant="text14" cursor="pointer">
                {t("home")}
              </Text>

              <CategoryPolicy />
              <CategoryEvent />
              <CategoryCompany />
              <CategoryLibrary />

              <Text onClick={() => handleRouter(ROUTE_ABOUT.en)} variant="text14" cursor="pointer">
                Về chúng tôi
              </Text>
            </Stack>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
