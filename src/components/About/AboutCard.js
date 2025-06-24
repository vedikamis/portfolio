import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vedika Mishra </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I have experience as a Data Engineer at TheSmallDataStore .
            <br />
            I have completed B.E. in Computer Engineering from Lokmanya Tilak College of Engineering, Mumbai University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Exploring Data Engineering & AI </span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Dancing (Certified Level-3 in Kathak Dance) </span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Reading and Writing Tech Blogs</span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is built on perseverance, determination, and a continuous desire to learn and grow!"{" "}
          </p>
          <footer className="blockquote-footer">Vedika</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
