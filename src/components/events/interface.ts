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
  upcomingEvents: Event[];
}

export interface SectionContentProps {
  pastEvents?: Event[];
}

export interface SectionPastProps {
  pastEvents?: Event[];
}

export interface EventsPageProps {
  upcomingEvents: Event[];
  pastEvents: Event[];
}

export interface EventsProps {
  upcomingEvents: Event[];
  pastEvents: Event[];
}
