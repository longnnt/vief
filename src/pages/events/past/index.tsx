import { WebContainer } from "@/src/common/components/WebContainer";
import EventDetail from "@/src/components/events-detail";
import React from "react";

export default function UpcomingPage() {
  return (
    <WebContainer>
      <EventDetail isExpired={true} />
    </WebContainer>
  );
}
