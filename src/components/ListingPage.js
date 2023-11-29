import React, { useState, useEffect } from "react";
const ListingPage = ({ eventData }) => {
  const [events, setEvents] = useState([]);
  const [random, setRandomData] = useState([
    {
      eventName: "Music Festival",
      startDate: "2023-12-02T22:08:57.848Z",
      endDate: "2023-12-07T12:44:18.530Z",
      location: "New York",
      tickets: 132,
      approvalRequired: false,
      capacity: 276,
      visibility: "private",
    },
    {
      eventName: "Art Exhibition",
      startDate: "2023-11-30T09:17:41.865Z",
      endDate: "2023-12-02T23:18:53.159Z",
      location: "Los Angeles",
      tickets: 92,
      approvalRequired: true,
      capacity: 133,
      visibility: "public",
    },
    {
      eventName: "Food Expo",
      startDate: "2023-12-19T10:09:24.901Z",
      endDate: "2023-12-19T23:30:37.654Z",
      location: "London",
      tickets: 110,
      approvalRequired: false,
      capacity: 203,
      visibility: "private",
    },
    {
      eventName: "Tech Conference",
      startDate: "2023-12-17T20:46:06.702Z",
      endDate: "2023-12-19T03:44:48.007Z",
      location: "Paris",
      tickets: 144,
      approvalRequired: false,
      capacity: 250,
      visibility: "public",
    },
    {
      eventName: "Fitness Bootcamp",
      startDate: "2023-12-16T01:17:29.286Z",
      endDate: "2023-12-20T09:38:19.600Z",
      location: "Tokyo",
      tickets: 138,
      approvalRequired: false,
      capacity: 232,
      visibility: "public",
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const mergedEvents = [...random, ...eventData];
        setEvents(mergedEvents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [eventData]);

  return (
    <div className="container mt-4" id="events-listing">
      <hr />
      <h4>Event Listing Page </h4>
      <div className="row">
        {events.map((event, index) => (
          <div key={index} className="col-md-6 mb-5">
            <div className="card d-flex">
              <div className="random-image">
                <img
                  src={`https://source.unsplash.com/random/300x300/?${event.eventName ?event.eventName : random }`}
                  alt="Random"
                  className="img-fluid"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{event.eventName}</h5>
                <p className="card-text">
                  <strong>Start Time:</strong> {event.startDate}
                  <br />
                  <strong>End Time:</strong> {event.endDate}
                  <br />
                  <strong>Location:</strong> {event.location}
                </p>
                <a href="#" className="btn btn-primary">
                  Go To Event
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
