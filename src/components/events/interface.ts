import { ChakraProps } from "@chakra-ui/react";

export interface ButtonEventComponentProps {
  wrapperStyle?: ChakraProps;
  btnTitle?: string;
  isArrowForward?: boolean;
  textHeight?: string;
}

export interface SectionContentItemProps {
  wrapperStyle?: ChakraProps;
}

export interface SectionPastProps {
  wrapperStyle?: ChakraProps;
}

export interface TimeLeftProps {
  days?: number;
  wrapperStyle?: ChakraProps;
  stroke?: string;
  isExpired?: boolean;
}

export interface SectionUpcomingProps {
  upcoming?: [];
}

export interface SectionContentProps {
  PAST_DATA?: [];
}

export interface SectionPastProps {
  past?: [];
}
