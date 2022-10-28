import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { FaUser } from 'react-icons/fa';
import './Header.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import titleLogo from '../../images/titelLogo.jpg'
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user.displayName}
        </Tooltip>
    );

    const handleSignOut = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <img style={{ height: '40px', width: '40px', borderRadius: '50%', marginRight: '10px' }} src={titleLogo} alt="" />
                <Navbar.Brand href="#home">javascript Frameworks</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Link className='me-2 mb-2' to='/'><Button variant="primary">Courses</Button></Link>
                        <Link className='me-2 mb-2' to='/faq'><Button variant="primary">FAQ</Button></Link>
                        <Link className='me-2 mb-2' to='/blog'><Button variant="primary">Blog</Button></Link>
                        <Link ><Button variant="primary">dark mode</Button></Link>
                    </Nav>
                    <Nav className='align-items-center'>

                        {user?.uid ?
                            <>
                            <Button className='me-2' onClick={handleSignOut} variant="primary">Log Out</Button>
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Image style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image>
                            </OverlayTrigger>
                            </>
                            :
                            <>
                                <Link to='/login'><Button className='me-2' variant="primary">Login</Button></Link>
                                <FaUser></FaUser>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;