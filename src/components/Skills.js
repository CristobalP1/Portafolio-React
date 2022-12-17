import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/svg/logo.svg';
import colorSharp from '../assets/img/colorSharp.jpg'
import planet from '../assets/img/universe.jpg';

const SkillPage = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h2>Skills</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={planet} alt="image" className="img-skill"></img>
                                <h5>Web Developer</h5>
                            </div>
                            <div className="item">
                                <img src={planet} alt="image" className="img-skill"></img>
                                <h5>Web Developer</h5>
                            </div>
                            <div className="item">
                                <img src={planet} alt="image" className="img-skill"></img>
                                <h5>Web Developer</h5>
                            </div>
                            <div className="item">
                                <img src={planet} alt="image" className="img-skill"></img>
                                <h5>Web Developer</h5>
                            </div>
                            <div className="item">
                                <img src={planet} alt="image" className="img-skill"></img>
                                <h5>Web Developer</h5>
                            </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}></img>
        </section>
      )

}

export default SkillPage;
