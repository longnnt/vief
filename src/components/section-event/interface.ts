import { ChakraProps } from "@chakra-ui/react";
export interface TimeLeftProps {
  days?: number;
  wrapperStyle?: ChakraProps;
}
export interface EventContentItemProps {
  wrapperStyle?: ChakraProps;
}
export interface DescriptionProps {
  children: React.ReactNode;
  wrapperStyle?: ChakraProps;
}

export interface Event {
  img: string;
  title: string;
  shortDesc: string;
  content: string;
}
