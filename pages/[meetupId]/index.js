import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      title="Juhi Chawla"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Juhi_Chawla_LFW-2017.jpg/330px-Juhi_Chawla_LFW-2017.jpg"
      address="Ambala, Haryana, India"
      description="Juhi Chawla (born 13 November 1967) is an Indian actress, film producer and entrepreneur. She established herself as one of the leading actresses of Hindi cinema from the late 1980s through the early 2000s.[1] Recognised for her comic timing and vivacious on-screen persona, she is the recipient of several accolades, including two Filmfare Awards."
    />
  );
}

export function getStaticPaths() {
  return {
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
    fallback: false,
  };
}

export function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        title: "Juhi Chawla",
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Juhi_Chawla_LFW-2017.jpg/330px-Juhi_Chawla_LFW-2017.jpg",
        address: "Ambala, Haryana, India",
        description:
          "Juhi Chawla (born 13 November 1967) is an Indian actress, film producer and entrepreneur. She established herself as one of the leading actresses of Hindi cinema from the late 1980s through the early 2000s.[1] Recognised for her comic timing and vivacious on-screen persona, she is the recipient of several accolades, including two Filmfare Awards.",
      },
    },
  };
}

export default MeetupDetails;
