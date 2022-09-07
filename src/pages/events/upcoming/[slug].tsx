import { WebContainer } from "@/src/common/components/WebContainer";
import EventDetail from "@/src/components/events-detail";
import { getDetailUpcomingEvent } from "@/src/components/events/service";
import { GetServerSideProps } from "next";
import React from "react";

export default function UpcomingPage({ UPCOMING_DATA }: any) {
  return (
    <WebContainer>
      <EventDetail isExpired={false} />
    </WebContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await getDetailUpcomingEvent();
  return {
    props: {
      UPCOMING_DATA: data.data,
    },
  };
};
