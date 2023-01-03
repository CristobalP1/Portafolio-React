import React from 'react'
import Col from 'react-bootstrap/Col';

const CardServices = ({title,description,img}) => {
  return (
    <Col xs={12} sm={6} md={4} className='mt-5 card-service'>
        <img src={img}></img>
        <Col className='aling-center text-center align-content-center justify-content-center mt-4 card-service-text'>
        <h4>{title}</h4>
        <p>{description}</p>
        </Col>
    </Col>
  )
}

export default CardServices