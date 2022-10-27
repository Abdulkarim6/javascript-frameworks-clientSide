import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';
import './Login.css'


const Login = () => {
    const { signIn, googleLogin } = useContext(AuthContext);

    const handleLogInSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log((user));
            })
            .catch(e => {
                console.error(e)
            })
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider()

        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Form onSubmit={handleLogInSubmit} className='loginForm'>
                <h3 className='text-center'>Please Login with Email and Password</h3>
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
            </Form>
            <Button onClick={handleGoogleSignIn} className='mt-2 mb-2 d-block' variant="primary">Login with Google</Button>
            <Button variant="light">If new in this site? Please <Link to='/register'>Register</Link></Button>
        </div>
    );
};

export default Login;