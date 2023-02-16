import { useEffect, useState } from "react";

const { default: MeetupList } = require("@/components/meetups/MeetupList");

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Juhi Chawla",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Juhi_Chawla_LFW-2017.jpg/330px-Juhi_Chawla_LFW-2017.jpg",
    address: "Ambala, Haryana, India",
    description:
      "Juhi Chawla (born 13 November 1967) is an Indian actress, film producer and entrepreneur. She established herself as one of the leading actresses of Hindi cinema from the late 1980s through the early 2000s.[1] Recognised for her comic timing and vivacious on-screen persona, she is the recipient of several accolades, including two Filmfare Awards.",
  },
  {
    id: "m2",
    title: "Jaya Prada",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Jaya_Prada_graces_Perfect_Pati_TV_serial_launch_%2803%29_%28cropped%29.jpg",
    address: "Rajahmundry, Andhra Pradesh, India",
    description:
      "Jaya Prada Nahata (born Lalitha Rani; 3 April 1962) is an Indian actress and politician. She is hailed as one of the most iconic and influential actresses in both Telugu and Hindi film industries in late '70s, '80s and early '90s.[8] Jayaprada is the recipient of three Filmfare Awards South and has starred in many Telugu and Hindi films along with several Kannada, Tamil, Malayalam, Bengali and Marathi films. She left the film industry at the peak of her career, as she joined the Telugu Desam Party (TDP) in 1994 and entered politics. She was a Member of Parliament (MP) from Rampur, Uttar Pradesh from 2004 to 2014.",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    //Http Request to get meetups
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;
