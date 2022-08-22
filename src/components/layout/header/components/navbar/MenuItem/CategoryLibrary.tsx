import { Category } from "@/src/common/type/type";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const CategoryLibrary = ({ children }: { children: Category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
          Thư viện{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </MenuButton>
        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          {children?.map((index, key) => (
            <MenuItem key={key}>
              <Link>{index.name}</Link>
              {/* <Link href ={index.url}>{index.name}</Link> */}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default CategoryLibrary;
