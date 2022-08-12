import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { buyCarthunk, getCarthunk } from '../store/slices/car.slice';
import '../assets/styles/cart.css'


const Car = ({handleClose,show}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
   

     const car = useSelector(state=>state.car)

 useEffect(() => {
 
    dispatch(getCarthunk())

 }, [])
 
 console.log(car);

    return (
        <div>
              <Offcanvas show={show} onHide={handleClose} placement={'end'}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
    
    <div className='card'>


                {
                    car.map(product=>(
                        <ul onClick={()=>navigate(`/Products/${product.id}`)}>
                            <div className='container'>

                            <li><h6>{product.brand} </h6> </li>
                            <li> <h4>{product.title}</h4></li>
                            <div className='card-quantity'>
                            <li>{product.productsInCart.quantity}</li>

                            </div>
                            <div className='card-div'></div>
                            <div className='card-total'>
                            <li>total: ${product.price}</li>

                            </div>
                            </div>

                        </ul>
                    ))
                }
    </div>
          </Offcanvas.Body>
          <Button className='btn-buy' variant="danger" onClick={()=> dispatch(buyCarthunk())}>BUY CART</Button>
        </Offcanvas>
        

        </div>
    );
};

export default Car;