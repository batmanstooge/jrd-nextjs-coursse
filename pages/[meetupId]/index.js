import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{`Meetup - ${props.meetupData.title}`}</title>
        <meta name="description" content="Meeting up with " />
      </Head>
      <MeetupDetail
        title={props.meetupData.title}
        image={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://batmanstooge:stephan1e@cluster0.ojwnp0x.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetupIds = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  const meetupPaths = meetupIds.map((meetupId) => {
    return {
      params: {
        meetupId: meetupId._id.toString(),
      },
    };
  });
  return {
    paths: meetupPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://batmanstooge:stephan1e@cluster0.ojwnp0x.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  console.log("Robin: " + selectedMeetup);
  client.close();
  return {
    props: {
      // meetupData: {
      //   title: "Juhi Chawla",
      //   id: meetupId,
      //   image:
      //     "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Juhi_Chawla_LFW-2017.jpg/330px-Juhi_Chawla_LFW-2017.jpg",
      //   address: "Ambala, Haryana, India",
      //   description:
      //     "Juhi Chawla (born 13 November 1967) is an Indian actress, film producer and entrepreneur. She established herself as one of the leading actresses of Hindi cinema from the late 1980s through the early 2000s.[1] Recognised for her comic timing and vivacious on-screen persona, she is the recipient of several accolades, including two Filmfare Awards.",
      // },
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
