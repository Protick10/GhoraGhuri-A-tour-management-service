import React from 'react';
import "./newsletter.css";

import { Col, Container, Row } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
    return <section className="newsletter">
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsletter__content">
                        <h2 className="newsletter__title">Subscribe to our newsletter to get useful traveling information.</h2>

                        <div className="newsletter__input">
                            <input type="email" name="email" id="email" placeholder="Enter your email" />
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>

                        <p className="newsletter__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Sit amet consectetur adipisicing elit. </p>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="newsletter__img">
                        <img src={maleTourist} alt=""/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default Newsletter;
