import { TypographyProps } from "@chakra-ui/react";

export interface SectionHeaderProps {
  w?: string;
  h?: string;
  p?: string;
  m?: string;
  mb?: string;
  category?: string;
  title?: string;
  titleWidth?: string;
  titleHeight?: string;
  heading?: string;
  headingWidth?: string;
  headingHeight?: string;
  headingMarginTop?: string;
  isReverse?: boolean;
  alignItems?: "center";
}

export interface SectionProps {
  w?: string;
  h?: string;
  marginLeftRight?: string;
  children: React.ReactNode;
}

export interface ButtonComponentProps {
  w?: string;
  h?: string;
  btnTitle?: string;
  p?: string;
  isArrowForward?: boolean;
  textHeight?: string;
  mt?: string;
}

export interface HeadingComponentProps {
  w?: string;
  h?: string;
  heading?: string;
  mt?: string;
}

export interface ShortDesProps {
  shortDes?: string;
  w?: string;
  h?: string;
  p?: string;
  m?: string;
  mt?: string;
  textWidth?: string;
  textHeight?: string;
  btnTitle?: string;
  haveButton?: boolean;
  textAlign?: "justify" | "unset";
}

export interface TitleProps {
  title?: string;
  w?: string;
  h?: string;
  category?: string;
  isBorderBottom?: boolean;
  textColor?: string;
  mb?: string;
  lineHeight?: string;
}
