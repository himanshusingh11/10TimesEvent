import React, { useState } from "react";

const EventForm = ({ addEvent }) => {
  const [eventData, setEventData] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
    location: "",
    tickets: 0,
    approvalRequired: false,
    capacity: 0,
    visibility: "public",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(eventData); // Pass eventData to a function in the parent component
    setEventData({
      eventName: "",
      startDate: "",
      endDate: "",
      location: "",
      tickets: 0,
      approvalRequired: false,
      capacity: 0,
      visibility: "public",
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Section - Event Form */}
        <div className="col-md-6">
          <h2>Create Event</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="eventName" className="form-label">
                Event Name
              </label>
              <input
                type="text"
                className="form-control"
                id="eventName"
                name="eventName"
                value={eventData.eventName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="startDate" className="form-label">
                Event Start Date
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="startDate"
                name="startDate"
                value={eventData.startDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endDate" className="form-label">
                Event End Date
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="endDate"
                name="endDate"
                value={eventData.endDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Event Location
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={eventData.location}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tickets" className="form-label">
                Event Tickets
              </label>
              <input
                type="number"
                className="form-control"
                id="tickets"
                name="tickets"
                value={eventData.tickets}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="approvalRequired"
                name="approvalRequired"
                checked={eventData.approvalRequired}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="approvalRequired">
                Approval Required
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="capacity" className="form-label">
                Event Capacity
              </label>
              <input
                type="number"
                className="form-control"
                id="capacity"
                name="capacity"
                value={eventData.capacity}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="visibility" className="form-label">
                Visibility
              </label>
              <select
                className="form-select"
                id="visibility"
                name="visibility"
                value={eventData.visibility}
                onChange={handleInputChange}
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        {/* Right Section - Image (Placeholder) */}
        <div className="col-md-6">
          <div className="row">
            {[1, 2, 3].map((index) => (
              <div key={index} className="row-md-4 mb-3">
                <img
                  src={`https://source.unsplash.com/random/300x200?image=${index}`}
                  alt={`Event ${index}`}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
