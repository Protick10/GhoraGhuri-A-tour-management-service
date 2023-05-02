import React from "react";
import "../styles/home.css";

import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import worldImg from "../assets/images/world.png";

import SeachBar from "../shared/SeachBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";

const Home = () => {
  return (
    <>
      {/*==========hero-section start==========*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highLight"> memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  accusamus adipisci aperiam consequatur corporis culpa delectus
                  deleniti dolore doloremque dolores exercitationem expedita
                  fugiat id iste iusto laudantium necessitatibus nobis nostrum
                  obcaecati, officiis perspiciatis provident, quae quam qui,
                  quia quis rem reprehenderit rerum saepe sint sunt suscipit
                  veniam veritatis vero voluptas.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video
                  src={heroVideo}
                  alt=""
                  controls={true}
                  autoPlay={true}
                  loop={true}
                />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SeachBar />
          </Row>
        </Container>
      </section>

      {/*==========hero-section end==========*/}

      {/*==========about-section start==========*/}
      <section className="about__section">
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">We we serve</h5>
              <h2 className="services__title">Our Services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/*==========about-section end==========*/}


      {/*==========Featured Tour Section Start==========*/}

      <section className="featured__tour">
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our Featured Tour</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

        {/*==========Featured Tour Section End==========*/}
    </>
  );
};

export default Home;
