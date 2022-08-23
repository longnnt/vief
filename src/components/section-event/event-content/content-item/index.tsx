import ButtonComponent from "@/src/components/section/components/Button";
import Calendar from "@/src/components/section/components/Calendar";
import Location from "@/src/components/section/components/Location";
import ShortDes from "@/src/components/section/components/ShortDes";
import Title from "@/src/components/section/components/Title";
import WoodSector from "@/src/components/section/components/WoodSector";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Description from "./Description";
import TimeLeft from "./TimeLeft";

interface ContentItemProps {
  w?: string;
  h?: string;
  mr?: string;
}

export default function ContentItem({ w, h, mr }: ContentItemProps) {
  return (
    <Flex
      w={w}
      h={h}
      backgroundColor="white.secondary"
      mr={mr}
      flexDirection="column"
      alignItems={"center"}
      borderBottomRadius={"14px"}
    >
      <Image src="./event.png" alt="" />
      <Box w="352px" mt="32px">
        <Title
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut"
          isBorderBottom={false}
          textColor="text.primary"
          lineHeight="28px"
          mb="16px"
        />
        <ShortDes
          shortDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
          haveButton={false}
          textAlign="unset"
        />
        <Flex
          m="16px 0"
          flexDirection="column"
          h="91px"
          justifyContent="space-between"
        >
          <Description>
            <Calendar />
          </Description>
          <Description>
            <Location />
          </Description>
          <Description>
            <WoodSector />
          </Description>
        </Flex>
        <Flex alignItems={"center"} mb="32px">
          <ButtonComponent
            btnTitle="Đăng ký nhanh"
            isArrowForward={false}
            textHeight="25px"
            mt="0"
          />
          <TimeLeft days={5} ml="16px" />
        </Flex>
      </Box>
    </Flex>
  );
}
