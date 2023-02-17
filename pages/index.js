import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

const { default: MeetupList } = require("@/components/meetups/MeetupList");

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Meetups with Actresses" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://batmanstooge:stephan1e@cluster0.ojwnp0x.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          id: meetup._id.toString(),
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
        };
      }),
    },
    revalidate: 1,
  };
}

export default HomePage;
