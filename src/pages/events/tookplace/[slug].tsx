import { WebContainer } from "@/src/common/components/WebContainer";
import EventDetail from "@/src/components/events-detail";
import { getDetailPastEvent } from "@/src/components/events/service";
import { GetServerSideProps } from "next";
import React from "react";

export default function UpcomingPage({ tookplaceData }: any) {
  return (
    <WebContainer>
      <EventDetail isExpired={true} data={tookplaceData} />
    </WebContainer>
  );
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  // const tookplaceData = await getDetailPastEvent();
  return {
    props: {
      tookplaceData: {
        createdAt: "2022-09-06T09:16:04.692Z",
        updatedAt: "2022-09-06T09:23:09.560Z",
        deletedAt: null,
        version: 5,
        id: 1,
        field: "WOOD",
        location: "Ha Noi abc",
        timeStart: "2022-09-06T09:14:11.398Z",
        isFeature: -1,
        thumbnail: {
          id: 2022,
          url: "https://s3.ap-southeast-1.amazonaws.com/vief-dev/images/986a74bc-7472-40f3-94dd-2fb1f195701c.png",
        },
        title: "LIÊN HỢP QUỐC KHỞI ĐỘNG THẬP KỶ PHỤC HỒI HỆ SINH THÁI",
        lang: "vi",
        slug: "slug-1",
        shortDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
        content:
          "Aliquet risus mauris nunc, in amet a sed. Curabitur quam est, magna sodales id eu faucibus sed. Velit convallis adipiscing sed neque convallis diam, ultrices suscipit sodales. Tellus adipiscing in mattis in dignissim leo nisl. Blandit facilisis bibendum risus ultricies eu a, elit. Sed suscipit accumsan a integer aliquam. Nunc congue consequat lacus molestie semper a neque. Et malesuada amet, lorem felis adipiscing.Diam turpis ac elit morbi donec libero. Purus adipiscing semper mattis proin diam at consectetur. Amet eu, feugiat nisl vestibulum, fusce dignissim tincidunt vel. Est quisque quam ac massa. Vitae senectus tristique tellus venenatis malesuada amet viverra mollis. Tellus sit odio donec faucibus massa at egestas. Nulla nunc nisl ornare et eu urna at sollicitudin ut. Cursus ac in urna, et volutpat vehicula risus, pharetra. Morbi dolor eget diam, diam mattis. Tincidunt a nulla odio at.",
      },
    },
  };
};
