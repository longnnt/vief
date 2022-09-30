import { ROUTE_EVENT_UPCOMING_DETAIL } from "@/src/common/constants/routes.constant";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import { replacePathParams } from "@/src/common/lib/common.lib";
import { formatDate, timeLeft } from "@/src/common/utils/common.utils";
import ButtonComponent from "@/src/components/section/components/Button";
import Location from "@/src/Images/Icons/Location";
import WoodSector from "@/src/Images/Icons/WoodSector";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Calendar from "../../Images/Icons/Calendar";
import Description from "./Description";
import { Event } from "./interface";
import TimeLeft from "./TimeLeft";

interface EventContentItemProps {
  event: Event;
}
export default function EventContentItem({ event }: EventContentItemProps) {
  const { thumbnail, shortDesc, title, timeStart, location, field, slug } = event!;
  const router = useViefRouter();

  function handleRedirect(slug: string) {
    router.push(
      replacePathParams(ROUTE_EVENT_UPCOMING_DETAIL["en"], {
        slug,
      })
    );
  }
  return (
    <Flex backgroundColor="white.secondary" flexDirection={"column"} alignItems={"center"} borderRadius={"14px"}>
      <Box
        position="relative"
        w="full"
        h={{ md: "288px" }}
        overflow={"hidden"}
        borderTopRadius="14px"
        sx={{
          ".event-card:hover &": {
            transform: "scale(1.2)",
          },
        }}
      >
        <Image src={thumbnail?.url || ""} alt="" priority layout="fill" />
      </Box>
      <VStack px="16px" py="32px" alignItems="start" spacing="16px">
        <Text variant="text20" className="text-2-line" onClick={() => handleRedirect(slug!)} cursor="pointer">
          {title}
        </Text>
        <Text variant="text14" className="text-4-line">
          {shortDesc}
        </Text>
        <Flex m="16px 0" flexDirection="column" h="91px" justifyContent="space-between">
          <Description content={formatDate(timeStart!)}>
            <Calendar />
          </Description>
          <Description content={location}>
            <Location />
          </Description>
          <Description content={field}>
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
          <TimeLeft days={timeLeft(timeStart!)} />
        </Flex>
      </VStack>
    </Flex>
  );
}
