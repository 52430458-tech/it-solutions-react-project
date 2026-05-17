import { useState, useEffect } from "react";

function Contact() {
  const [email, setEmail] = useState("info@itsolutions.com");

  useEffect(() => {
    console.log("Contact page loaded");
  }, []);

  return (
    <div className="page">
      <h1 className="heading">Contact Us</h1>

      <p className="par">Email: {email}</p>
      <p className="par">Phone: +961 70 000 000</p>

      <button
        className="contbtn"
        onClick={() => setEmail("support@itsolutions.com")}
      >
        Support Email
      </button>
    </div>
  );
}

export default Contact;
