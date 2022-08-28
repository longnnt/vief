import { EVENT_DATA } from "@/src/components/section-event/constants";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import SectionContentItem from "./section-content-item";

export default function SectionContent() {
  return (
    <SimpleGrid columns={{ md: 2, sm: 1 }} gap="32px">
      {EVENT_DATA.map((event, index) => (
        <GridItem key={index}>
          <SectionContentItem event={event} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
}
