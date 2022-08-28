import { ROUTE_EVENT } from "@/src/common/constants/routes.constant";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import { Category } from "@/src/common/type/type";
import { Menu, MenuButton, useDisclosure } from "@chakra-ui/react";

const CategoryEvent = ({ children }: { children?: Category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useViefRouter();

  function handleRouteEvetnPage() {
    router.push(ROUTE_EVENT["en"]);
  }
  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          onClick={handleRouteEvetnPage}
        >
          Sự kiện
        </MenuButton>
        {/* <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mt={"-7px"}>
          {children?.map((index, key) => (
            <MenuItem key={key}>
              <Link>{index.name}</Link>
            </MenuItem>
          ))}
        </MenuList> */}
      </Menu>
    </>
  );
};

export default CategoryEvent;
