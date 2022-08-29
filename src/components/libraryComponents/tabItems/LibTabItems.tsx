import { Tab } from "@chakra-ui/react";
import { ReactNode } from "react";

export const LibTabItem = ({ children }: { children?: ReactNode }) => {
  return (
    <Tab
      alignSelf="center"
      _selected={{ color: "white", bg: "brand.100" }}
      color="text"
      border={"1px solid #C5CAD3"}
      borderRadius={"6px"}
      mr={{ md: "32px", sm: "20px" }}
      w={{ md: "140px", sm: "100px" }}
      p={{ base: "8px", sm: "0px" }}
    >
      {children}
    </Tab>
  );
};
