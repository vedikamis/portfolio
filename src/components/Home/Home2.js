import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.svg";
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
              Hi, I’m Vedika Mishra, a Data Engineer with experience in <b className="purple">Designing Data Pipelines & Automating Workflows. </b> 
               I’m fluent in <b className="purple">Python, SQL</b>, and have hands-on experience with <b className="purple">MongoDB, Apache Airflow, and ETL processes</b>
              <br />
              <br />I specialize in
              <i>
                <b className="purple"> Data Architecture, Data Cleaning & Data Visualization </b>
              </i>
              <br />
              <br />
              I have previously worked at&nbsp;
              <i>
                <b className="purple">TheSmallDataStore & LTIMindtree </b> where I focused on developing and optimizing backend systems, Data Ingestion pipelines and Quality Assurance{" "}
              </i>
              <br />
              <br />
              My field of interest lies in <b className="purple">Data Engineering and Data Analytics</b> 
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
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vedikamis"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vedikamishra/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mishra_vedikaa/"
                  target="_blank"
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
