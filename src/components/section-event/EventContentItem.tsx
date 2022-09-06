import { PICTURE } from "@/src/common/constants/common.constant";
import ButtonComponent from "@/src/components/section/components/Button";
import Location from "@/src/Images/Icons/Location";
import WoodSector from "@/src/Images/Icons/WoodSector";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import Calendar from "../../Images/Icons/Calendar";
import Description from "./Description";
import { Event } from "./interface";
import TimeLeft from "./TimeLeft";

type EventContentItemProps = {
  event: Event;
};
export default function EventContentItem({ event }: EventContentItemProps) {
  const { img, shortDesc, title } = event;
  return (
    <Flex
      backgroundColor="white.secondary"
      flexDirection={"column"}
      alignItems={"center"}
      borderRadius={"14px"}
      w={{ "2xl": "384px" }}
    >
      <Box overflow={"hidden"} borderTopRadius="14px">
        <Image
          src={img}
          alt=""
          w="full"
          h="288px"
          transitionDuration={"0.2s"}
          sx={{
            ".event-card:hover &": {
              transform: "scale(1.2)",
            },
          }}
        />
      </Box>
      <VStack px="16px" py="32px" alignItems="start" spacing="16px">
        <Text variant="text20" className="text-2-line">
          {title}
        </Text>
        <Text variant="text14" className="text-4-line">
          {shortDesc}
        </Text>
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
            wrapperStyle={{ mt: "0", mr: "16px" }}
          />
          <TimeLeft days={5} />
        </Flex>
      </VStack>
    </Flex>
  );
}
