import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import EventForm from "./components/EventForm";
import ListingPage from "./components/ListingPage";
export default function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };
  return (
    <>
      <Header />
      <EventForm addEvent={addEvent} />
      <ListingPage eventData={events} />
      <Footer />
    </>
  );
}
