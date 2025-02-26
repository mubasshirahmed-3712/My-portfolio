import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am <b className="purple">Mubasshir Ahmed</b>, a passionate and detail-oriented 
              <b className="purple"> Full Stack Developer</b> who loves crafting seamless and dynamic 
              web experiences. 🚀
              <br />
              <br />I am fluent in technologies like
              <i>
                <b className="purple"> HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. </b>
              </i>
              <br />
              <br />
              My area of interest includes building innovative &nbsp;
              <i>
                <b className="purple">Web Applications and Scalable Products</b>, 
                while focusing on delivering user-friendly experiences.
              </i>
              <br />
              <br />
              I specialize in creating modern web applications using{" "}
              <b className="purple">MERN Stack</b>, ensuring efficient backend operations with{" "}
              <b className="purple">Node.js and Express.js</b> while enhancing user interfaces with{" "}
              <i>
                <b className="purple">React.js.</b>
              </i>
              <br />
              <br />
              I'm always eager to learn new technologies and apply them to build intuitive, 
              performance-optimized web solutions. 🌟
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mubasshirahmed-3712"
                  target="_blank"
                  title="GitHub Profile"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/your-twitter-handle"
                  target="_blank"
                  title="Twitter Profile"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mubasshir-ahmed"
                  target="_blank"
                  title="LinkedIn Profile"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/badhshah._09"
                  target="_blank"
                  title="Instagram Profile"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
