import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import IA from '../assets/img/iaProject.jpg';
import Cat from '../assets/img/project_cat.jpg';
import Calculator from '../assets/img/project_calculator2.jpg';
import Coffe from '../assets/img/project_coffe.jpg';
import Bodega from '../assets/img/project_bodega.jpg';
import Coffe2 from '../assets/img/project_coffe_2.jpg';
import ApiCofee from '../assets/img/project_coffeapi.jpg';
import RestApi from '../assets/img/Project_BackEnd.jpg';
import ProjectsCard from './ProjectCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const ProjectsPages = () => {

     const projects = [
        {
            title:"Login Website Cat",
            description:"Javascript - Bootstrap - Html - Css",
            imgUrl:Cat,
            code:"https://github.com/CristobalP1/Login-WebSite-Bootstrap",
            view:"https://cristobalp1.github.io/Login-WebSite-Bootstrap/",
        },
        {
            title:"Portal IA Education",
            description:"Javascript - Html - Css",
            imgUrl:IA,
            code:"https://github.com/CristobalP1/LandingPage-IA",
            view:"https://cristobalp1.github.io/LandingPage-IA/",
        },
        {
            title:"Calculator Iphone",
            description:"Javascript - Html - Css",
            imgUrl:Calculator,
            code:"https://github.com/CristobalP1/Calculator-Iphone-JS",
            view:"https://cristobalp1.github.io/Calculator-Iphone-JS/",
        },
        {
            title:"Coffee WebSite",
            description:"Javascript - Html - Css - axios",
            imgUrl:Coffe,
            code:"https://github.com/CristobalP1/Coffee-WebSite",
            view:"https://cristobalp1.github.io/Coffee-WebSite/",
        },
        {
            title:"App Bodega",
            description:"Flutter - Dart",
            imgUrl:Bodega,
            code:"https://github.com/CristobalP1/AppBodega",
            view:"",
        },
        {
            title:"Ecommerce Coffe",
            description:"Javascript - React - Material Ui",
            imgUrl:Coffe2,
            code:"https://github.com/CristobalP1/Ecommerce-React-Js",
            view:"",
        },
    ]

    const projectsBackEnd = [
        {
            title:"Rest Api Node",
            description:"NodeJs - Postgresql - JavaScript",
            imgUrl:RestApi,
            code:"https://github.com/CristobalP1/Rest-Api-NodeJs-Postgres",
            view:"",
        },
        {
            title:"Api Coffe Sample",
            description:"NodeJs - JavaScript",
            imgUrl:ApiCofee,
            code:"https://github.com/CristobalP1/Api-Node-Sample",
            view:"https://api-node-sample-production.up.railway.app/",
        },
    ]

  return (
        <section className='project' id='projects'>
            <Container className='mt-5 mb-5'>
                <Row className="row-skill-set justify-content-cente align-items-center">
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <h2>Projects</h2>
                        <p>Some of the projects I have worked on both as a team and personally</p>
                        </div>}
                        </TrackVisibility>
                        <Tab.Container id='projects-tabs' defaultActiveKey="first">
                        <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey="first">Front-End</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Back-End</Nav.Link>
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
                            <Tab.Pane eventKey="second">
                            <Row>
                                    {
                                        projectsBackEnd.map((project,index) => {
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
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
  );
}

export default ProjectsPages;