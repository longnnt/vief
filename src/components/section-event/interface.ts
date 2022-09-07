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
  content?: string;
}

export interface Event {
  thumbnail?: Thumbnail;
  title?: string;
  shortDesc?: string;
  content?: string;
  location?: string;
  timeStart: string;
  field?: string;
  slug: string;
}

type Thumbnail = {
  url?: string;
};
