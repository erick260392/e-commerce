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


  let ActualDate = new Date();
  let Day = ActualDate.getDate();

  const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]



  return (
    <div >


      {
        purchases.map(product => (

          <><div className='card'>
            {` ${Day}-${month[ActualDate.getMonth()]}-${ActualDate.getFullYear()}`}
          </div>


            <div className='card'>
              {product.cart.products.map(product => (
                <div className='info-card'>

                  <><div className='container'>
                    <h3>{product.title}</h3>

                  </div>
                    <div className='container'>

                      <h4>${product.price}</h4>
                    </div>
                    <div className='container'>

                      <h5> cant:{product.productsInCart.quantity}</h5>

                    </div></>
                </div>




              ))}

            </div></>




        ))
      }

    </div>

  )
};

export default Purchaches