import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bikeImage from "../../Assets/Projects/bike estore.png";
import urlShortener from "../../Assets/Projects/urlshortener.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import weatherApp from "../../Assets/Projects/weather.png";
import blog from "../../Assets/Projects/blog.png";
import todoApp from "../../Assets/Projects/todo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Real-Time Bike E-Commerce Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bikeImage}
              isBlog={false}
              title="Bike E-Commerce Website"
              description="A fully responsive bike e-commerce platform with features like product listings, cart management using localStorage, order confirmation via email, and JWT-based authentication."
              ghLink="https://github.com/yourusername/bike-ecommerce"
              demoLink="https://your-bike-demo-link.com"
            />
          </Col>

          {/* URL Shortener */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urlShortener}
              isBlog={false}
              title="URL Shortener"
              description="A simple and efficient URL shortener using Express.js, EJS, and MongoDB. Generates unique short URLs and tracks click statistics."
              ghLink="https://github.com/yourusername/url-shortener"
              demoLink="https://your-url-demo-link.com"
            />
          </Col>

          {/* Portfolio Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="A dynamic portfolio built using React.js to showcase my skills, projects, and professional journey. Includes animated sections and a contact form."
              ghLink="https://github.com/mubasshirahmed-3712/My-portfolio"
              demoLink="https://mubasshirsportfolio.vercel.app/"
            />
          </Col>

          {/* Weather App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="Weather App"
              description="A weather forecast application built with React.js and OpenWeather API, providing real-time weather updates and multi-city search functionality."
              ghLink="https://github.com/yourusername/weather-app"
              demoLink="https://your-weather-demo-link.com"
            />
          </Col>

          {/* Blogging Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Platform"
              description="A blog platform built using MERN stack, allowing users to post, edit, and delete articles. Features include user authentication and rich-text editing."
              ghLink="https://github.com/yourusername/blog-platform"
              demoLink="https://your-blog-demo-link.com"
            />
          </Col>

          {/* To-Do Application */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoApp}
              isBlog={false}
              title="To-Do Application"
              description="A simple and efficient to-do list application using React.js with CRUD operations, task tracking, and localStorage for persistent data."
              ghLink="https://github.com/yourusername/todo-app"
              demoLink="https://your-todo-demo-link.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
