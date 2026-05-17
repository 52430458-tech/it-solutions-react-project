import { useState, useEffect } from "react";

function About() {
  const [text, setText] = useState(
    "We are a professional IT company specializing in web development, software engineering, and digital transformation.",
  );

  useEffect(() => {
    console.log("About page loaded");
  }, []);

  return (
    <div className="pages">
      <h1 className="heading">About Us</h1>

      <p className="aboutus">{text}</p>

      <button
        className="aboutbtn"
        onClick={() =>
          setText(
            "We build modern, fast and scalable digital solutions for businesses.",
          )
        }
      >
        More Info
      </button>

      <table className="abouttable">
        <tr>
          <td>Experience</td>
          <td>5+ Years</td>
        </tr>
        <tr>
          <td>Projects</td>
          <td>100+</td>
        </tr>
        <tr>
          <td>Clients</td>
          <td>International</td>
        </tr>
      </table>
    </div>
  );
}

export default About;
