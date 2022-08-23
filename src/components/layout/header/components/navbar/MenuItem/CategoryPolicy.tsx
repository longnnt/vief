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

// export async function getStaticProps() {
//   // const res= await axios.get('/client/categories?type=POLICY&field=WOOD&isFeatured=1')
//   const res= await fetch('https://fakestoreapi.com/users')
//   const data = await res.json();
//   return{
//       props:{
//         cate:data,
//       }
//   }
// }

const CategoryPolicy = ({ children }: { children: Category }) => {
  // console.log(children);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
          Chính sách {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </MenuButton>

        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
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
