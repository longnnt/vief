import { WebContainer } from "@/src/common/components/WebContainer";
import EventDetail from "@/src/components/events-detail";
import { getDetailUpcomingEvent } from "@/src/components/events/service";
import { GetServerSideProps } from "next";
import React from "react";

export default function UpcomingPage({ TOOKPLACE_DATA }: any) {
  console.log(TOOKPLACE_DATA);

  return (
    <WebContainer>
      <EventDetail isExpired={true} />
    </WebContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await getDetailUpcomingEvent();
  return {
    props: {
      TOOKPLACE_DATA: data.data,
    },
  };
};
