import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../shared/footer/Footer';
import Header from '../shared/header/Header';
import SideNav from '../shared/sideNav/SideNav';
import { Outlet } from 'react-router-dom'
// import { useContext } from 'react';
// import { AuthContext } from '../context/AuthProvider';

const Main = () => {
    // const {user} = useContext(AuthContext);

    return (
        <div>
            {/* <h1>{user.displayName}</h1>
            <h4>{user.age}</h4> */}
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