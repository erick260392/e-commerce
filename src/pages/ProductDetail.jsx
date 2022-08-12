import React, { useEffect, useState } from 'react';
import { Button, Carousel, Form, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate, useParams } from 'react-router';
import { addProductsthunk, getProductsthunk } from '../store/slices/products.slice';
import '../assets/styles/productsDetail.css'


const ProductDetail = () => {


  const [ProductsDetail, setProductsDetail] = useState({})
  const [SuggestedProducts, setSuggestedProducts] = useState([])
  const [Add, setAdd] = useState(1)
  const allproducts = useSelector(state => state.products)
  const dispacht = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()


  useEffect(() => {

    dispacht(getProductsthunk())
  }, [])

  useEffect(() => {

    const findProduct = allproducts.find(productsItem => productsItem.id === Number(id))
    setProductsDetail(findProduct)

    const filteredProducts = allproducts.filter(newsProducts => newsProducts.category.id === findProduct.category.id)
    setSuggestedProducts(filteredProducts);
    console.log(filteredProducts);

  }, [allproducts, id])

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }


const addProducts = ()=>{
 

  const product= {
    id:ProductsDetail.id,
    quantity:Add

  }
  dispacht(addProductsthunk(product))
console.log(product)
}



 
  return (
    <div className='container' style={{ height: '750px' }} >
      <div className="container">
        <div className="row">
          <div className="col-12   col-sm-6  col-md-6"
          style={{ maxHeight: '650px' }}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item >
                <img
                style={{ maxHeight: '550px' }}
                class="img-thumbnail rounded mx-auto d-block"
                  src={ProductsDetail?.productImgs?.[0]}

                />

              </Carousel.Item>
              <Carousel.Item  >
                <img
        style={{ maxHeight: '550px' }}
        class="img-thumbnail rounded mx-auto d-block"
                  src={ProductsDetail?.productImgs?.[1]}
                />

              </Carousel.Item>
              <Carousel.Item >
                <img
               style={{ maxHeight: '550px' }}
               class="img-thumbnail rounded mx-auto d-block"
                  src={ProductsDetail?.productImgs?.[2]}
                />
              </Carousel.Item>
            </Carousel>


          </div>
          <div className="col-12 border col-sm-6 border col-md-6 boder mt-5 rounded ">
            <div>Most sale</div>
            <h1>{ProductsDetail?.title}</h1>
            
      <div className='container mt-5'>
        <ListGroup>
          <ListGroup.Item> <p>{ProductsDetail?.description}</p> </ListGroup.Item>
        </ListGroup>

       
      </div>
            <h2>${ProductsDetail?.price}</h2>

            <Form onSubmit={addProducts}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Cantidad</Form.Label>
        <Form.Control 
        id="form-quantity"
        type="number"
        placeholder="cantidad"
        value={Add}
        onChange={e=> setAdd(e.target.value)}
         />
              </Form.Group>
      <Button className='btn-cart'
       variant="primary" type="submit">
      <i class="fa-solid fa-cart-plus"></i>
      </Button>
    </Form>
            </div>

        </div>
      </div>

 
<div className='container mt-5'  >
<div className='card-similar'>
        {
    SuggestedProducts.map(products => (
  
          <div className="container-similar "  
          onClick={()=> navigate( `/Products/${products.id}`)}
          >
           
        <img  
        style={{ maxHeight: '550px' }}
        class="img-thumbnail rounded mx-auto d-block"  src={products?.productImgs?.[0]} alt="" />

<div className='contaner-text'>
  <h6>{products.title}</h6>
   <h2>${products.price}</h2>

</div>


      </div>


    ))
  }
</div>
     
      </div>
    </div>





  );
};

export default ProductDetail;