import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sitioWeb from '../assets/svg/sitio.svg'
import android from '../assets/svg/android.svg'
import seo from '../assets/svg/seo.svg'
import redes from '../assets/svg/redes.svg'
import responsive from '../assets/svg/responsive.svg'
import desing from '../assets/svg/desing.svg'
import CardServices from './CardServices';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const ServicesPages = () => {

    const servicesOn = [
        {
            title:"Web Applications Development",
            description:"Your website will have nothing to envy to the websites of large companies",
            img:sitioWeb,
        },
        {
            title:"Mobile Applications Development",
            description:"You will have a clean fast and intuitive application ideal for the client",
            img:android,
        },
        {
            title:"Web Page with Modern Design UX/UI",
            description:"Intuitive and modern designs so that the client has a good experience when visiting the web",
            img:desing,
        },
        {
            title:"Social media integration",
            description:"Social networks are on all devices the visibility of your website is essential",
            img:redes,
        },
        {
            title:"SEO",
            description:"Your website will have the best optimization strategy in order to have the best positioning",
            img:seo,
        },
        {
            title:"Responsive Sites",
            description:"Your website can be run on any device such as tablets or phones",
            img:responsive,
        },
    ]


    return (
        <section className='services'>
            <Container className='mt-5 mb-5'>
                <Row>
                    <Col xs={12} sm={12} md={12} className='service-header'>
                    <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <h2>Services</h2>
                        <p>All the services you provided as a developer</p>
                        </div>}
                </TrackVisibility>
                    </Col>
                </Row>
                <Row>
                {
                    servicesOn.map((servicesMap,index) => {
                        return(
                            <CardServices key={index} {...servicesMap}></CardServices>
                        )
                    })
                }
                </Row>
            </Container>
        </section>
    )
}

export default ServicesPages