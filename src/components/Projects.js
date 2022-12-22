import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import IA from '../assets/img/iaProject.jpg';
import Cat from '../assets/img/project_cat.jpg';
import Calculator from '../assets/img/project_calculator2.jpg';
import Coffe from '../assets/img/project_coffe.jpg';
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
            view:"",
        },
        {
            title:"Portal IA Education",
            description:"Javascript - Html - Css",
            imgUrl:IA,
            code:"https://github.com/CristobalP1/LandingPage-IA",
            view:"",
        },
        {
            title:"Calculator Iphone",
            description:"Javascript - Html - Css",
            imgUrl:Calculator,
            code:"https://github.com/CristobalP1/Calculator-Iphone-JS",
            view:"",
        },
        {
            title:"Coffee WebSite",
            description:"Javascript - Html - Css - axios",
            imgUrl:Coffe,
            code:"https://github.com/CristobalP1/Coffee-WebSite",
            view:"",
        },
/*         {
            title:"Business Startup",
            description:"Desing and Developed",
            imgUrl:ColorShap2,
            codeUrl:codeSvg,
            viewUrl:viewSvg,
        },
        {
            title:"Business Startup",
            description:"Desing and Developed",
            imgUrl:ColorShap2,
            codeUrl:codeSvg,
            viewUrl:viewSvg,
        },
        {
            title:"Business Startup",
            description:"Desing and Developed",
            imgUrl:ColorShap2,
            codeUrl:codeSvg,
            viewUrl:viewSvg,
        },
        {
            title:"Business Startup",
            description:"Desing and Developed",
            imgUrl:ColorShap2,
            codeUrl:codeSvg,
            viewUrl:viewSvg,
        },
        {
            title:"Business Startup",
            description:"Desing and Developed",
            imgUrl:ColorShap2,
            codeUrl:codeSvg,
            viewUrl:viewSvg,
        }, */
    ]

    const projectsBackEnd = [
        {
            title:"Business Startup",
            description:"Desing and Developed",
            imgUrl:IA,
        },
        {
            title:"Business Startup",
            description:"Desing and Developed",
            imgUrl:IA,
        },
    ]

  return (
        <section className='project' id='projects'>
            <Container>
                <Row className="row-skill-set justify-content-cente align-items-center">
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <h2>Projects</h2>
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