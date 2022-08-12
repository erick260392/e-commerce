import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router';
import { filterCategoriesthunk, filterProdutsthunk, getProductsthunk } from '../store/slices/products.slice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/styles/home.css'
import { Row, Col, InputGroup, Form, ListGroup, Container, Carousel } from 'react-bootstrap'
import axios from 'axios';
import { setIsLoading } from '../store/slices/isLoading.Slice';

const Home = () => {

    const products = useSelector(state => state.products)
    const dispacht = useDispatch()
    const navigate = useNavigate()

    const [SerchValue, setSerchValue] = useState("")
    const [categories, setCategories] = useState([])

    const [currentPage, setcurrentPage] = useState(1)
    const [productsPerPage] = useState(6)
    const indexOfLastProducts = currentPage * productsPerPage;
    const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
    const currenProducts = products.slice(indexOfFirstProducts, indexOfLastProducts)
    const paginate = (pageNumber) => {
        setcurrentPage(pageNumber)
    }
    const pageNumber = []
    const totalproducts = products.length
    for (let i = 1; i <= Math.ceil(totalproducts / productsPerPage); ++i) {
        pageNumber.push(i);
    }

    console.log(currenProducts)
    useEffect(() => {

        dispacht(getProductsthunk());

        dispacht(setIsLoading(true));
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
            .then(res => setCategories(res.data.data?.categories))
            .finally(() => dispacht(setIsLoading(false)));


    }, [])

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <Container>
            <Row>
                <Col md="auto">

                    <div className='card_categories'>

                        <ListGroup className='categories'>
                            {
                                categories.map((category) => (

                                    <ListGroup.Item id='categories'
                                        onClick={() => dispacht(filterCategoriesthunk(category.id))}>
                                        {category.name}
                                    </ListGroup.Item>

                                ))

                            }
                        </ListGroup>

                    </div>

                </Col>
                <Col >
                    <Col>

                        <InputGroup id='form_home' className="mb-3">
                            <Form.Control

                                placeholder="PRODUCTS NAME"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={e => setSerchValue(e.target.value)}
                                value={SerchValue} />
                            <Button variant="outline-secondary" onClick={() => dispacht(filterProdutsthunk(SerchValue))}>
                                Serch
                            </Button>
                        </InputGroup>

                        <div className='nav-bar'>
                            <nav >

                                <ul className='pagination'> {pageNumber.map(number => (
                                    <ul key={number} className='page-item'> <a onClick={() => paginate(number)}
                                        className='page-link'>
                                        {number}</a> </ul>
                                ))}</ul>
                            </nav>

                        </div>
                        <div className='card_products'>

                            {SerchValue === "" ? <Row xs={1} md={2} lg={3} className="g-3">
                                {currenProducts.map(product => (

                                    <Col>
                                        <Card id="card-home"  >
                                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                                <Carousel.Item>
                                                    <img
                                                    onClick={() => navigate(`/products/${product.id}`)}
                                                    style={{ maxHeight: '350px' }}
                                                    class="img-thumbnail rounded mx-auto d-block"
                                                        src={product.productImgs[0]}

                                                    />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img    
                                                    onClick={() => navigate(`/products/${product.id}`)}
                                                    style={{ maxHeight: '350px' }}
                                                    class="img-thumbnail rounded mx-auto d-block"
                                                        src={product.productImgs[1]}

                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                    onClick={() => navigate(`/products/${product.id}`)}
                                                    style={{ maxHeight: '350px' }}
                                                    class="img-thumbnail rounded mx-auto d-block"
                                                        src={product.productImgs[2]}

                                                    />
                                                </Carousel.Item>
                                            </Carousel>
                                            <Card.Body >
                                                <Card.Title className='text-title-home'>{product.title}</Card.Title>
                                                <Card.Text>
                                                    <h2 className='text-price'>${product.price}</h2>
                                                </Card.Text>
                                               
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                                :
                                <Row xs={1} md={2} lg={3} className="g-4">
                                    {products.map(product => (
                                        <Col>
                                            <Card 
                                            >
                                              <Carousel activeIndex={index} onSelect={handleSelect}>
                                                <Carousel.Item>
                                                    <img
                                                    onClick={() => navigate(`/products/${product.id}`)}
                                                    style={{ maxHeight: '350px' }}
                                                    class="img-thumbnail rounded mx-auto d-block"
                                                        src={product.productImgs[0]}

                                                    />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                    onClick={() => navigate(`/products/${product.id}`)}
                                                    style={{ maxHeight: '350px' }}
                                                    class="img-thumbnail rounded mx-auto d-block"
                                                        src={product.productImgs[1]}

                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                    onClick={() => navigate(`/products/${product.id}`)}
                                                    style={{ maxHeight: '350px' }}
                                                    class="img-thumbnail rounded mx-auto d-block"
                                                        src={product.productImgs[2]}

                                                    />
                                                </Carousel.Item>
                                            </Carousel>
                                                <Card.Body>
                                                    <Card.Title className='text-title-home'>{product.title}</Card.Title>
                                                    <Card.Text>
                                                        <h1 className='text-price'>${product.price}</h1>
                                                    </Card.Text>
                                                
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>

                            }

                        </div>

                    </Col>

                </Col>
            </Row>
        </Container>

    );
};

export default Home;