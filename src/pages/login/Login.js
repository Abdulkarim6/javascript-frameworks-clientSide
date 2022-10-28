import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation } from 'react-router-dom';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { signIn, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogInSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                setError('')
                form.reset();
                navigate(from, { replace: true });
                console.log((user));
            })
            .catch(e => {
                setError(e.message)
                console.error(e)
            })
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider()

        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='Form'>
            <Form onSubmit={handleLogInSubmit}>
                <h3 className='text-center'>Please Login !!!</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <span className='text-danger'>{error}</span>
            </Form>
            <div className='or'>
                <span>Or</span>
                <Button onClick={handleGoogleSignIn} className='mt-2 mb-2 d-block' variant="primary">Login with Google</Button>
                <Button variant="light">If new in this site? Please <Link to='/register'>Register</Link></Button>
            </div>
        </div>
    );
};

export default Login;