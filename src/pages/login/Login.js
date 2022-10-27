import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);

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

    return (
        <Form onSubmit={handleLogInSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Log In
            </Button>
        </Form>
    );
};

export default Login;