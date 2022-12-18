import {useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import ColorShap2 from '../assets/svg/logo.svg';
import ProjectsCard from './ProjectCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const ProjectsPages = () => {

     const projects = [
        {
            title:"Business Startup",
            description:"Desing and Developed",
            imgUrl:ColorShap2,
        },
        {
            title:"Business Startup",
            description:"Desing and Developed",
            imgUrl:ColorShap2,
        },
        {
            title:"Business Startup",
            description:"Desing and Developed",
            imgUrl:ColorShap2,
        },
        {
            title:"Business Startup",
            description:"Desing and Developed",
            imgUrl:ColorShap2,
        },
        {
            title:"Business Startup",
            description:"Desing and Developed",
            imgUrl:ColorShap2,
        },
        {
            title:"Business Startup",
            description:"Desing and Developed",
            imgUrl:ColorShap2,
        },
    ]

  return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <h2>Projects</h2>
                        <p>Lorem is simply vificu edr fewodsddf pararas dw</p>
                        </div>}
                        </TrackVisibility>
                        <Tab.Container id='projects-tabs' defaultActiveKey="first">
                        <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" disabled>
                            Tab Third
                            </Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index) => {
                                            return (
                                                <ProjectsCard
                                                key={index}
                                                {...project}
                                                >
                                                </ProjectsCard>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Loremm Ipson</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem Ipson</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={ColorShap2}></img>
        </section>
  );
}

export default ProjectsPages;