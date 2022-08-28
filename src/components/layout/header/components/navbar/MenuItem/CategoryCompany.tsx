import { ROUTE_ENTERPRISE_STORY } from "@/src/common/constants/routes.constant";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import { Category } from "@/src/common/type/type";
import { Menu, MenuButton, useDisclosure } from "@chakra-ui/react";

const CategoryCompany = ({ children }: { children?: Category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useViefRouter();

  function handleRouteDetail() {
    router.push(ROUTE_ENTERPRISE_STORY.en);
  }
  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          onClick={handleRouteDetail}
        >
          Doanh nghiệp
          {/* {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} */}
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

export default CategoryCompany;
