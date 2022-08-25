import ButtonComponent from "@/src/components/section/components/Button";
import ShortDes from "@/src/components/section/components/ShortDes";
import Title from "@/src/components/section/components/Title";
import Location from "@/src/Images/Icons/Location";
import WoodSector from "@/src/Images/Icons/WoodSector";
import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Calendar from "../section/components/Calendar";
import Description from "./Description";
import { EventContentItemProps } from "./interface";
import TimeLeft from "./TimeLeft";

export default function EventContentItem({
  wrapperStyle,
}: EventContentItemProps) {
  return (
    <Flex
      {...wrapperStyle}
      backgroundColor="white.secondary"
      flexDirection="column"
      alignItems={"center"}
      borderRadius={"14px"}
      className="event-card"
    >
      <Box overflow={"hidden"} borderTopRadius="14px">
        <Image
          src="./event.png"
          alt=""
          transitionDuration={"0.2s"}
          sx={{
            ".event-card:hover &": {
              transform: "scale(1.2)",
            },
          }}
        />
      </Box>
      <Box
        w="352px"
        mt={{ "2xl": "32px" }}
        p={{ xl: "32px 32px 0 32px", "2xl": 0 }}
      >
        <Title
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut"
          isBorderBottom={false}
          textColor="text.primary"
          wrapperStyle={{ mb: "16px", lineHeight: "28px" }}
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
            wrapperStyle={{ mt: "0" }}
          />
          <TimeLeft days={5} wrapperStyle={{ ml: "16px" }} />
        </Flex>
      </Box>
    </Flex>
  );
}
