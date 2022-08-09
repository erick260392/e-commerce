import React, { useEffect, useState } from 'react';
import { Carousel, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate, useParams } from 'react-router';
import { getProductsthunk } from '../store/slices/products.slice';
import '../assets/styles/productsDetail.css'

const ProductDetail = () => {


  const [ProductsDetail, setProductsDetail] = useState({})
  const [SuggestedProducts, setSuggestedProducts] = useState([])
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





  console.log(ProductsDetail)
  console.log(SuggestedProducts)

 
  return (
    <div className='container-detail' style={{ maxHeight: '650px' }} >
      <div className="container">
        <div className="row">
          <div className="col-12   col-sm-6  col-md-6  ">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item className= "image-product" >
                <img
                  style={{ maxHeight: '350px' }}
                  className=".d-block w-150 image-product"
                  src={ProductsDetail?.productImgs?.[0]}

                />

              </Carousel.Item>
              <Carousel.Item className= "image-product" >
                <img
                  style={{ maxHeight: '350px' }}
                  className="d-block w-150"
                  src={ProductsDetail?.productImgs?.[1]}
                />

              </Carousel.Item>
              <Carousel.Item className= "image-product" >
                <img
                  style={{ maxHeight: '350px' }}
                  className="d-block w-150"
                  src={ProductsDetail?.productImgs?.[2]}
                />
              </Carousel.Item>
            </Carousel>


          </div>
          <div className="col-12 border col-sm-6 border col-md-6 boder mt-5 rounded ">
            <div>Most sale</div>
            <h1>{ProductsDetail?.title}</h1>
            <h2>${ProductsDetail?.price}</h2>
            <h3>free shipping</h3>
          </div>


        </div>
      </div>

      <div className='container mt-5'>
        <ListGroup>
          <ListGroup.Item>{ProductsDetail?.description}</ListGroup.Item>
        </ListGroup>

      </div>
        <h2>SuggestedProducts</h2>
<div className='container'>
<div className='card-similar'>
        {
    SuggestedProducts.map(products => (
  
          <div className="container-similar" 
          onClick={()=> navigate(  `/Products/${products.id}`)}
          >
           
        <img  style={{ maxHeight: '250px' }} src={products?.productImgs?.[0]} alt="" />

<div className='contaner-text'>
  <h6>{products.title}</h6>
   <h2>${products.price}</h2>
   <h5>free shipping</h5>
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