import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSCo-31ziv39ojQBP2FDIMD2giQb3L4SsUv7tLuqARsvjzjU2krYaNo0DeZDaxkeeMVsI91HDObcbxB2__3SF0",
    address: "Some address, city, state",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSCo-31ziv39ojQBP2FDIMD2giQb3L4SsUv7tLuqARsvjzjU2krYaNo0DeZDaxkeeMVsI91HDObcbxB2__3SF0",
    address: "Another address, city, state",
    description: "This is a second meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export default HomePage;
