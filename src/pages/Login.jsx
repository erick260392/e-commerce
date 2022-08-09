import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const Login = () => {

const {register,handleSubmit}= useForm()

const Submit = data => {
    alert("hice sumit");
}

    return (
        <div className='container'>
            <h1>login</h1>
            <Form onSubmit={handleSubmit(Submit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email") } />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("password") } />
      </Form.Group>
    
      <Button variant="primary" >
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default Login;