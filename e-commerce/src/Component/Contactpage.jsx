import React from "react";
import MapIcon from "@mui/icons-material/Map";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import { GoogleMap } from "@react-google-maps/api";

const developerdata = [
  {
    name: "John Doe",
    position: "Senior Marketing Manager",
    phone: "Phone: + 000 123 000 77 88",
    email: "contact@example.com",
  },
  {
    name: "John Doe",
    position: "Senior Marketing Manager",
    phone: "Phone: + 000 123 000 77 88",
    email: "contact@example.com",
  },
  {
    name: "John Doe",
    position: "Senior Marketing Manager",
    phone: "Phone: + 000 123 000 77 88",
    email: "contact@example.com",
  },
];

export default function Contactpage() {
  return (
    <>
      <div className="contactpage">
        <div className="contactpart01">
          <h5>GET IN TOUCH</h5>
          <h1>Visit one of our agency locations or contact us today</h1>
          <b>Head Office</b>
          <div>
            <p htmlFor="">
              {" "}
              <MapIcon />
              <span className="spnaspace">
                {" "}
                56 Glassford Streat Flasgow G1 1UL New York
              </span>
            </p>
            <p htmlFor="">
              {" "}
              <EmailIcon />
              <span className="spnaspace">contact@exaple.com</span>
            </p>
            <p htmlFor="">
              {" "}
              <PhoneEnabledIcon />
              <span className="spnaspace">(+91) 9834606661</span>
            </p>
            <p htmlFor="">
              {" "}
              <AccessTimeIcon />
              <span className="spnaspace">
                Monday to Saturday: 9.00am to 16.00pm
              </span>
            </p>
          </div>
        </div>
        <div className="contactpart02">
          <iframe
            style={{ width: "100%", height: "100%", border: "0" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.935910921219!2d73.95101137503694!3d18.48656198260051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9b36402d70f%3A0x1ea89d8ce080d725!2sShankar%20suman%20park!5e0!3m2!1sen!2sin!4v1716730431741!5m2!1sen!2sin"
            allowfullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="contactdetails">
        <div className="contactdetails01">
          <h4>LEAVE A MESSAGE</h4>
          <h2>
            <b>We love to hear from you</b>
          </h2>
          <div className="inputboxfield">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="Subject" />
            <textarea type="text" placeholder="Your Message" />
            <button>submit</button>
          </div>
        </div>
        <div className="contactdetails02">
          {developerdata.map((curr) => (
            <ul>
              <li>
                <div className="imgtag"></div>
                <div className="devdetails">
                  <h5>{curr.name}</h5>
                  <p>{curr.position}</p>
                  <p>{curr.phone}</p>
                  <p>{curr.email}</p>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
