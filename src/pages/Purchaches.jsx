import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesthunk } from '../store/slices/purchases.slice';
import '../assets/styles/purchaches.css'

const Purchaches = () => {

  const dispacht = useDispatch()
  const purchases = useSelector(state => state.purchases)

  console.log(purchases);
  useEffect(() => {

    dispacht(getPurchasesthunk())

  }, [])



  return (
    <div className='card'>


      {
        purchases.map(product => (
          <div className='container-order'>
            <button className='btn-order'>Number Order:{product.cart.id}</button>
            <div className='container-order' >
              <ul>
                <div className='container'>
                  <li>{product.cart.products?.[0]?.title}</li>
                     <h6>description:{product.cart.products?.[0]?.description}</h6>
                     <h3>price: {product.cart.products?.[0]?.price}</h3>
                </div>
                <div className='container'>

                  <li>{product.cart.products?.[1]?.title}</li>
                  <h6>description:{product.cart.products?.[1]?.description}</h6>
                  <h3>price: {product.cart.products?.[1]?.price}</h3>
                </div>
                <div className='container'>

                  <li>{product.cart.products?.[2]?.title}</li>
                  <h6>description:{product.cart.products?.[2]?.description}</h6>
                  <h3>price: {product.cart.products?.[2]?.price}</h3>
                </div>
              </ul>
            </div>
          </div>
        ))
      }

    </div>

  )
};

export default Purchaches