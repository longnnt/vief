import Description from "@/src/components/section-event/Description";
import Calendar from "@/src/Images/Icons/Calendar";
import { Event } from "@/src/components/section-event/interface";
import Location from "@/src/Images/Icons/Location";
import { Image, Text, VStack } from "@chakra-ui/react";
import { formatDate } from "@/src/common/utils/common.utils";
import { ROUTE_EVENT_TOOKPLACE_DETAIL } from "@/src/common/constants/routes.constant";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import { replacePathParams } from "@/src/common/lib/common.lib";

type SectionContentItemProps = {
  event: Event;
};
export default function SectionContentItem({ event }: SectionContentItemProps) {
  const { thumbnail, title, shortDesc, location, timeStart, slug } = event;

  const router = useViefRouter();

  function handleRedirect(slug: string) {
    router.push(
      replacePathParams(ROUTE_EVENT_TOOKPLACE_DETAIL["en"], {
        slug,
      })
    );
  }

  return (
    <VStack w="full" flexDirection={{ md: "row", sm: "column" }} spacing="0">
      <Image
        src={thumbnail?.url}
        alt=""
        w={{ md: "280px", sm: "full" }}
        h="210px"
        borderRadius="12px"
        mr={{ md: "16px", sm: "0px" }}
      />
      <VStack alignItems="start" spacing="0" pt={{ sm: "16px", base: "0px" }}>
        <Text
          variant="text20"
          className="text-2-line"
          onClick={() => handleRedirect(slug!)}
          cursor="pointer"
        >
          {title}
        </Text>
        <Text variant="text14" className="text-2-line" pt="16px">
          {shortDesc}
        </Text>
        <Description
          wrapperStyle={{ pt: "16px" }}
          content={formatDate(timeStart!)}
        >
          <Calendar />
        </Description>
        <Description wrapperStyle={{ pt: "8px" }} content={location}>
          <Location />
        </Description>
      </VStack>
    </VStack>
  );
}
