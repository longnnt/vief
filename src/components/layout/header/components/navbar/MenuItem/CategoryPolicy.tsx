import { ROUTE_POLICY } from "@/src/common/constants/routes.constant";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";
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

const CategoryPolicy = ({ children }: { children?: Category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useViefRouter();

  function handleRouter() {
    router.push(ROUTE_POLICY.en);
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

        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mt={"-7px"}>
          {children?.map((index, key) => (
            <MenuItem key={key}>
              <Link>{index.name}</Link>
              {/* <Link href ={index.url}>{index.name}</Link> */}
            </MenuItem>
          ))}
        </MenuList>
        {/* <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} >
            {children.map((index, key) => (  
              <MenuItem>
                <Link key={key}>{index.name}</Link>
              </MenuItem>
            ))}
          </MenuList> */}
      </Menu>
    </>
  );
};
export default CategoryPolicy;
