import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/svg/logo.svg'
import navGit from '../assets/svg/navGmail.svg'
import navInstagram from '../assets/svg/navInstagram.svg'
import navLinked from '../assets/svg/navTiktok.svg'


const FooterPages = () => {

  return (
        <footer className='footer'>
            <Container className='aling-item-center justify-content-center footer-row'>
                <Row className='justify-content-center align-items-center'>
                    <Col xs={12} md={12} lg={12} className="col-redes">
                        <Row className='justify-content-center'>
                            <Col lg={4}>
                                <hr></hr>
                            </Col>
                            <Col lg={4}>
                                <div className='social-icon'>
                                <a href="https://www.instagram.com/cristobalpalaciosv/" target='_blank'><img src={navInstagram} alt="Instagram Logo"></img></a>
                                <a href="https://www.github.com/CristobalP1/" target='_blank'><img src={navGit} alt="git Logo"></img></a>
                                <a href="https://www.linkedin.com/in/cristobal-palacios-silva-3b833921b/" target='_blank'><img src={navLinked} alt="linked Logo"></img></a>
                                </div>
                            </Col>
                            <Col lg={4}>
                            <hr></hr>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                <Col xs={12} md={12} lg={12}>
                        <img src={logo} alt="logo" className='footer-logo'></img>
                    </Col>
                </Row>
                <Row>
                <Col xs={12} md={12} lg={12}>
                    <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
  );
}

export default FooterPages;