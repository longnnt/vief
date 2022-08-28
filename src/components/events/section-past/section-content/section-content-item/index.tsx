import { PICTURE } from "@/src/common/constants/common.constant";
import Description from "@/src/components/section-event/Description";
import Calendar from "@/src/components/section/components/Calendar";
import ShortDes from "@/src/components/section/components/ShortDes";
import Title from "@/src/components/section/components/Title";
import Location from "@/src/Images/Icons/Location";
import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { SectionContentItemProps } from "../../../interface";

export default function SectionContentItem({
  wrapperStyle,
}: SectionContentItemProps) {
  return (
    <Flex
      alignItems={"center"}
      {...wrapperStyle}
      mb={"32px"}
      mr={{ xl: "32px", "2xl": "0" }}
      w={{ sm: "100%", xl: "570px", "2xl": "592px" }}
      flexDirection={{ sm: "column", xl: "row", "2xl": "row" }}
      justifyContent="space-between"
    >
      <Image
        src={PICTURE(new Date().toString())}
        alt=""
        w={{ sm: "100%", xl: "260px", "2xl": "280px" }}
        h="full"
        borderRadius="12px"
      />
      <Box
        w={{ sm: "100%", xl: "296px", "2xl": "296px" }}
        ml={{ sm: "0", xl: "16px" }}
        mt={{ sm: "16px" }}
      >
        <Title
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          wrapperStyle={{ fontSize: "20px", lineHeight: "28px", mb: "16px" }}
          isBorderBottom={false}
        />
        <ShortDes
          shortDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
          haveButton={false}
          textAlign="unset"
          wrapperStyle={{ mb: "16px" }}
        />
        <Description>
          <Calendar />
        </Description>
        <Description>
          <Location />
        </Description>
      </Box>
    </Flex>
  );
}
