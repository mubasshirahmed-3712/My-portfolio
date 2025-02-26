import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mubasshir Ahmed </span>
            from <span className="purple">Hyderabad, India.</span>
            <br />
            I am an enthusiastic <span className="purple">Full Stack Developer</span> passionate about
            crafting user-centric and dynamic web applications.
            <br />
            I hold a <span className="purple">Bachelor of Computer Applications (BCA)</span> degree and specialize in
            building modern solutions using the <span className="purple">MERN stack</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Outdoor Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Go for Long Drives
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Experiencing New Cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to create solutions that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mubasshir Ahmed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
