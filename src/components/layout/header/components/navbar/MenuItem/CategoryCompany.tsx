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

const CategoryCompany = ({ children }: { children?: Category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
          Doanh nghiệp
          {/* {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} */}
        </MenuButton>
        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mt={"-7px"}>
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

export default CategoryCompany;
