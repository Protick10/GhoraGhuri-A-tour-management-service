import React from 'react';
import { Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom'
import '../styles/login.css'

import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png'

const Login = () => {
    return  
    <section>
        <Container>
            <Row>
                <Col lg='8' className='m-auto'>
                <div className="login_container d-flex justify-content-between">
                    <div className="login_img">
                        <img src= "E:\9th SEMESTER(SPRING-2023)\CSE-412\412 project\GhoraGhuri-A-tour-management-service\frontend\src\assets\images\login.png"  />
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default Login;
