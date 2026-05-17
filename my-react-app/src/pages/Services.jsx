import { useState } from "react";

function Services() {
  const [title, setTitle] = useState("Services");

  return (
    <div className="serv">
      <h1 className="heading">{title}</h1>

      <button className="servbtn" onClick={() => setTitle("What We Offer")}>
        view
      </button>

      <div className="card-container">
        <div className="card">
          <h3 className="cardtitle">Frontend Development</h3>
        </div>

        <div className="card">
          <h3 className="cardtitle">Backend Development</h3>
        </div>

        <div className="card">
          <h3 className="cardtitle">UI/UX Design</h3>
        </div>
      </div>
    </div>
  );
}

export default Services;
