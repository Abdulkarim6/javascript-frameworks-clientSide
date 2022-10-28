import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../shared/footer/Footer';
import Header from '../shared/header/Header';
import SideNav from '../shared/sideNav/SideNav';
import { Outlet } from 'react-router-dom'

const Main = () => {

    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='3'>
                        <SideNav></SideNav>
                    </Col>
                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;