import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../assets/styles/loadingScreen.css'

const LoadingScrean = () => {
    return (
        <div className='overlay'>
            <h1>Loading </h1>

            <Spinner animation="grow" variant="primary" size="sm" />
            <Spinner animation="grow" variant="secondary" size="sm" />
            <Spinner animation="grow" variant="success" size="sm" />
            <Spinner animation="grow" variant="danger" size="sm" />
            <Spinner animation="grow" variant="warning" size="sm" />
            <Spinner animation="grow" variant="info" size="sm" />
            <Spinner animation="grow" variant="light" size="sm" />
            <Spinner animation="grow" variant="dark" size="sm" />
        </div>
    );
};

export default LoadingScrean;