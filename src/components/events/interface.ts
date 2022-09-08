import { ChakraProps } from "@chakra-ui/react";
import { Event } from "../section-event/interface";

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
  upcoming: Event[];
}

export interface SectionContentProps {
  pastData?: Event[];
}

export interface SectionPastProps {
  past?: Event[];
}

export interface EventsPageProps {
  upcomingData: Event[];
  pastData: Event[];
}

export interface EventsProps {
  upcoming: Event[];
  past: Event[];
}
