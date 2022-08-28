import { Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { EVENT_DATA } from "./constants";
import EventContentItem from "./EventContentItem";

function EventsHome() {
  return (
    <VStack>
      <Text variant="text20" borderBottom="1.5px solid #394160" mb="36px">
        Sự kiện / Sắp diễn ra
      </Text>
      <Grid
        templateColumns={{
          md: "repeat(3, 1fr)",
          sm: "repeat(1, 1fr)",
        }}
        gap="6"
      >
        {EVENT_DATA.slice(0, 3).map((event, index) => (
          <GridItem key={index}>
            <EventContentItem event={event} />
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
}

export { EventsHome };
