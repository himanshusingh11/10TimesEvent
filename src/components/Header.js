import React from "react";

const Header = () => {
  const scrollToEvents = () => {
    const eventsListing = document.getElementById("events-listing");
    if (eventsListing) {
      eventsListing.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-white" href="/">
          Event Creation Site
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#events"
                onClick={scrollToEvents}
              >
                Event Page
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
