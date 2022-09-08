import { WebContainer } from "@/src/common/components/WebContainer";
import Events from "@/src/components/events";
import { PAST_DATA, UPCOMING_DATA } from "@/src/components/events/constant";
import { EventsPageProps } from "@/src/components/events/interface";
import { getArticleEvent, getPastEvent } from "@/src/components/events/service";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function index({
  upcomingData,
  pastData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <WebContainer>
      <Events upcoming={upcomingData} past={pastData} />
    </WebContainer>
  );
}

export const getServerSideProps: GetServerSideProps<
  EventsPageProps
> = async () => {
  // const upcomingData = await getArticleEvent();
  // const pastData = await getPastEvent();
  return {
    props: {
      upcomingData: UPCOMING_DATA,
      pastData: PAST_DATA,
    },
  };
};
