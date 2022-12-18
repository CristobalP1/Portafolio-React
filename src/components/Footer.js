import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ColorShap2 from '../assets/svg/logo.svg';
import navGmail from '../assets/svg/navGmail.svg'
import navInstagram from '../assets/svg/navInstagram.svg'
import navTiktok from '../assets/svg/navTiktok.svg'

const FooterPages = () => {

  return (
        <footer className='footer'>
            <Container>
                <Row className='aling-item-center'>
                    <Col sm={6}>
                        <img src={ColorShap2} alt="logo"></img>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className='social-icon'>
                            <a href=''><img src={navGmail}></img></a>
                            <a href=''><img src={navInstagram }></img></a>
                            <a href=''><img src={navTiktok}></img></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
  );
}

export default FooterPages;