import { ROUTE_POLICY } from "@/src/common/constants/routes.constant";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import { Category } from "@/src/components/layout/interfaces";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const CategoryPolicy = ({ children }: { children?: Category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useViefRouter();
  const handleRouterCategoryItem = (children: any) => {
    router.push(children);
  };
  function handleRouter() {
    router.push(ROUTE_POLICY.en);
  }
  function checkCategory() {
    if (children === undefined || children.total === 0) return false;
    else return true;
    // return false
  }
  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          onClick={handleRouter}
        >
          Chính sách
          {/* {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} */}
        </MenuButton>
        {checkCategory() === true ? (
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mt={"-7px"}>
            {children?.data.map((index, key) => (
              <MenuItem
                key={key}
                onClick={() => handleRouterCategoryItem(index.path)}
              >
                <Text variant="text14" cursor="pointer">
                  {index.name}
                </Text>
              </MenuItem>
            ))}
          </MenuList>
        ) : null}
      </Menu>
    </>
  );
};
export default CategoryPolicy;
