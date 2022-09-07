import { WebContainer } from "@/src/common/components/WebContainer";
import Events from "@/src/components/events";
import { PAST_DATA, UPCOMING_DATA } from "@/src/components/events/constant";
import { getArticleEvent, getPastEvent } from "@/src/components/events/service";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function index({}: // UPCOMING_DATA,
// PAST_DATA,
InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <WebContainer>
      <Events upcoming={UPCOMING_DATA} past={PAST_DATA} />
    </WebContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getArticleEvent();
  const pastData = await getPastEvent();
  return {
    props: {
      UPCOMING_DATA: data.data,
      PAST_DATA: pastData.data.data,
    },
  };
};
