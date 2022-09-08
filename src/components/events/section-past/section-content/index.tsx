import { EVENT_DATA } from "@/src/components/section-event/constants";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { SectionContentProps } from "../../interface";
import SectionContentItem from "./section-content-item";

export default function SectionContent({ pastData }: SectionContentProps) {
  return (
    <SimpleGrid columns={{ md: 2, sm: 1 }} gap="32px">
      {pastData?.map((event, index) => (
        <GridItem key={index}>
          <SectionContentItem event={event} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
}
