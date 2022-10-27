import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import titleLogo from '../../images/titelLogo.jpg'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <img style={{ height: '40px' ,width : '40px', borderRadius:'50%' , marginRight : '10px'}} src={titleLogo} alt="" />
                <Navbar.Brand href="#home">javascript Frameworks</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                        <Link className='me-2 mb-2' to='/'><Button     variant="primary">Courses</Button></Link>
                        <Link className='me-2 mb-2' to='/faq'><Button  variant="primary">FAQ</Button></Link>
                        <Link className='me-2 mb-2' to='/blog'><Button variant="primary">Blog</Button></Link>
                        <Link ><Button variant="primary">dark mode</Button></Link>
                    </Nav>
                    <Nav className='align-items-center'>
                        <Link to='/register'>Register</Link>
                        <Link to='/login'>Login</Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;