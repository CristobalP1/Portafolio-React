import "react-multi-carousel/lib/styles.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogoJs from '../assets/img/js.png'
import LogoNode from '../assets/img/png-transparent-js-logo-node-logos-and-brands-icon.png'
import LogoReact from '../assets/img/react.png'
import LogoType from '../assets/svg/typescript-logo.svg'
import LogoGit from '../assets/img/Git_icon.png'
import LogoHtml from '../assets/img/html.png'
import LogoCss from '../assets/img/css.png'
import LogoFlutter from '../assets/img/flutter5.png'
import LogoDart from '../assets/img/dart.jpg'
import LogoSql from '../assets/img/sql-24.png'
import LogoBoostrap from '../assets/img/boostrap.png'
import LogoDjango from '../assets/img/django.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import CardSkill from "./CardSkill";


const SkillSet = () => {

    const skillSets = [
        {
            title:"JavaScript",
            img:LogoJs,
        },
        {
            title:"ReactJS",
            img:LogoReact,
        },
        {
            title:"NodeJs",
            img:LogoNode,
        },
        {
            title:"Git",
            img:LogoGit,
        },
        {
            title:"Django",
            img:LogoDjango,
        },
        {
            title:"TypeScript",
            img:LogoType,
        },
        {
            title:"Html",
            img:LogoHtml,
        },
        {
            title:"Css",
            img:LogoCss,
        },
        {
            title:"Flutter",
            img:LogoFlutter,
        },
        {
            title:"Dart",
            img:LogoDart,
        },
        {
            title:"Boostrap",
            img:LogoBoostrap,
        },
        {
            title:"Sql",
            img:LogoSql,
        },

    ]


      return (
        <section className="skill" id="skills">
            <Container>
                <Row className="row-skill-set justify-content-center align-items-center">
                <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                <h2>Skills Sets</h2>
                <p>skills that I manage and have used in some of my projects</p>
                </div>}
                </TrackVisibility>
                {
                    skillSets.map((skills,index)=>{
                        return (
                            <CardSkill key={index} {...skills}></CardSkill>
                        )
                    })
                }
                </Row>
            </Container>
        </section>
      )

}

export default SkillSet;
