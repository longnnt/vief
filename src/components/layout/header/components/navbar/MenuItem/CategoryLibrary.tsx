import { Category } from "@/src/common/type/type";
import { Menu, MenuButton, useDisclosure } from "@chakra-ui/react";

const CategoryLibrary = ({ children }: { children?: Category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
          Thư viện
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

export default CategoryLibrary;
