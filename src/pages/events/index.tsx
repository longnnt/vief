import { WebContainer } from "@/src/common/components/WebContainer";
import Events from "@/src/components/events";
import { PAST_DATA, UPCOMING_DATA } from "@/src/components/events/constant";
import { EventsPageProps } from "@/src/components/events/interface";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function index({ upcomingEvents, pastEvents }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <WebContainer>
      <Events upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
    </WebContainer>
  );
}

export const getServerSideProps: GetServerSideProps<EventsPageProps> = async () => {
  // const upcomingEvents = await getArticleEvent();
  // const pastEvents = await getPastEvent();
  return {
    props: {
      upcomingEvents: UPCOMING_DATA,
      pastEvents: PAST_DATA,
    },
  };
};
