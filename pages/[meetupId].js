import MeetupDetail from "../components/meetups/MeetupDetail";

const meetupDetails = () => {
  return (
    <MeetupDetail
      image="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSCo-31ziv39ojQBP2FDIMD2giQb3L4SsUv7tLuqARsvjzjU2krYaNo0DeZDaxkeeMVsI91HDObcbxB2__3SF0"
      title="A First Meetup"
      address="Some address, city, state"
      description="The meetup description"
    />
  );
};

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetUpData: {
        id: meetupId,
        image:
          "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSCo-31ziv39ojQBP2FDIMD2giQb3L4SsUv7tLuqARsvjzjU2krYaNo0DeZDaxkeeMVsI91HDObcbxB2__3SF0",
        title: "A First Meetup",
        address: "Some address, city, state",
        description: "The meetup description",
      },
    },
  };
};

export default meetupDetails;
