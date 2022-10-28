import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const Register = () => {
    const { createUser, handleUpdateProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
 
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegisterSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const PhotoURl = form.PhotoURl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, PhotoURl, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
                updateUserProfile(name, PhotoURl);
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            });

        const updateUserProfile = (name, PhotoURl) => {
            const profile = { displayName: name, photoURL: PhotoURl }
            handleUpdateProfile(profile)
                .then(() => { })
                .catch(error => console.error(error))
        }
    }

    return (
        <Form onSubmit={handleRegisterSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URl</Form.Label>
                <Form.Control name='PhotoURl' type="Photo URl" placeholder="Photo URl" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;