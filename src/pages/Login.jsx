import  axios  from 'axios';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Login = () => {

const {register,handleSubmit,reset} = useForm();
const navigate = useNavigate()
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);



const Submit = data => {
  console.log(data);
  axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login/",data)
  .then(res=> {
    navigate("/")
    console.log(res.data.data.token.toString())
    localStorage.setItem("token",res.data.data.token)

    })
    .catch(error=> {
      if(error.response.status=== (404,400)){
        setShow(true);
      }else{
      console.log(error.response)}
    })
    reset({
      email:"",
      password:""
    })
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
    
      <Button variant="primary"  type='submit'>
        Submit
      </Button>
    </Form>


    <>
  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Credentials are not valid</Modal.Title>
        </Modal.Header>
        <Modal.Body>Verifica la contraseña o el Password  </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         </Modal.Footer>
      </Modal>
    </>
        </div>
    );
};

export default Login;