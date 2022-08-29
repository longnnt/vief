import Description from "@/src/components/section-event/Description";
import Calendar from "@/src/Images/Icons/Calendar";
import { Event } from "@/src/components/section-event/interface";
import Location from "@/src/Images/Icons/Location";
import { Image, Text, VStack } from "@chakra-ui/react";

type SectionContentItemProps = {
  event: Event;
};
export default function SectionContentItem({ event }: SectionContentItemProps) {
  const { img, title, shortDesc } = event;
  return (
    <VStack w="full" flexDir={{ md: "row", sm: "column" }} spacing="16px">
      <Image
        src={img}
        alt=""
        w={{ md: "280px", sm: "full" }}
        h="210px"
        borderRadius="12px"
        mr={{ md: "16px", sm: "0px" }}
      />
      <VStack alignItems="start" spacing="16px">
        <Text variant="text20" className="text-2-line">
          {title}
        </Text>
        <Text variant="text14" className="text-2-line">
          {shortDesc}
        </Text>
        <Description>
          <Calendar />
        </Description>
        <Description>
          <Location />
        </Description>
      </VStack>
    </VStack>
  );
}
