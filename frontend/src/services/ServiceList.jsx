import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customization from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Consectetur adipisicing elit. A accusamus strum obcaecati, oe sint sunt suscipit veniam.",
  },
  {
    imgUrl: guideImg,
    title: "We Provide Best Tour Guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci.",
  },
  {
    imgUrl: customization,
    title: "Customization as you want",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci.",
  },
];
const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
