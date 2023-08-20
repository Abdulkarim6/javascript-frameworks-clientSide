import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { FaUser, FaMoon } from 'react-icons/fa';
import './Header.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import titleLogo from '../../images/titelLogo.jpg'
import { AuthContext } from '../../context/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

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
        <Navbar collapseOnSelect expand="lg" className='nav'>
            <Container>
                <img style={{ height: '60px', width: '60px', borderRadius: '50%', marginRight: '10px' }} src={titleLogo} alt="" />
                <span className='Navbar-Brand'>javascript Frameworks</span>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"  className='navLinks'>
                    <Nav>
                        <Link className='me-2 mb-1' to='/'><Button variant="primary" size="lg">Courses</Button></Link>
                        <Link className='me-2 mb-1' to='/faq'><Button variant="primary" size="lg">FAQ</Button></Link>
                        <Link className='me-2 mb-1' to='/blog'><Button variant="primary" size="lg">Blog</Button></Link>
                        {user?.uid ?
                            <span className='userImg'>
                                <Link><Button className='me-2 mb-1' onClick={handleSignOut} variant="primary" size="lg">Log Out</Button></Link>
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <Image style={{ height: '50px' , width:"50px"}} roundedCircle src={user.photoURL}></Image>
                                </OverlayTrigger>
                            </span>
                            :
                            <>
                                <Link to='/login'><Button className='me-2 mb-1' variant="primary" size="lg">Login</Button></Link>
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