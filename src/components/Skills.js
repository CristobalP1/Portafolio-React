import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/svg/logo.svg';
import npmImg from '../assets/img/npm6.jpg';
import mysqlImg from '../assets/img/mysql.png';
import figmaImg from '../assets/img/figma.png';
import dokcerImg from '../assets/img/docker5.jpg';
import porstgresImg from '../assets/img/postgres6.jpg'
import pythonImg from '../assets/img/python.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


const SkillPage = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 760 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 760, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col>
                        <div className="row-skill-set">
                        <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <h2>Other Skills</h2>
                            </div>}
                        </TrackVisibility>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={pythonImg} alt="image" className="img-skill"></img>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={porstgresImg} alt="image" className="img-skill"></img>
                                <h5>Postgres</h5>
                            </div>
                            <div className="item">
                                <img src={dokcerImg} alt="image" className="img-skill"></img>
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={figmaImg} alt="image" className="img-skill"></img>
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={mysqlImg} alt="image" className="img-skill"></img>
                                <h5>Mysql</h5>
                            </div>
                            <div className="item">
                                <img src={npmImg} alt="image" className="img-skill"></img>
                                <h5>Npm</h5>
                            </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )

}

export default SkillPage;
