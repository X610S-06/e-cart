import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductScreen = () => {

    const [product, setProduct] = useState([])
    
    const params = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products/${params.id}`)
            setProduct(data)
        }
        fetchProduct()
    },[params])

    return (
        <>
            <Link to='/' className='btn btn-dark'>
                Back
            </Link>

            <Row>
                <Col md={5} lg={6}>
                    <Image src={product.image} fluid alt={product.name}/>
                </Col>

                <Col md={4} lg={3}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating 
                                value={product.rating} 
                                text={`(${product.numReviews})`} 
                            />
                        </ListGroupItem>
                        <ListGroupItem>
                            Price : ${product.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            Description : {product.description}
                        </ListGroupItem>
                    </ListGroup>  
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                        Price 
                                    </Col>
                                    <Col>
                                        <strong>
                                            ${product.price}
                                        </strong>
                                    </Col>  
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                        Status 
                                    </Col>
                                    <Col>
                                        {product.countInstock>0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>  
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem className="text-center">
                                <Button 
                                    className='btn-block lg' 
                                    type='button'
                                    disabled={product.countInstock === 0} 
                                >
                                    Add to Cart
                                </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
