import { Text } from "@chakra-ui/react";
import SectionEvent from "../../section-event";
import { SectionUpcomingProps } from "../interface";

export default function SectionUpcoming({ upcoming }: SectionUpcomingProps) {
  return (
    <>
      <Text variant="text28" pb={{ base: "36px", sm: "16px" }}>
        Sắp diễn ra
      </Text>
      <SectionEvent upcomingData={upcoming} />
    </>
  );
}
