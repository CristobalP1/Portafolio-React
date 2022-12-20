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


const SkillSet = () => {

      return (
        <section className="skill" id="skills">
            <Container>
                <Row className="row-skill-set">
                <h2>Skills Sets</h2>
                    <Col xs={12} sm={6} md={3} >
                    <img className="logo-skill-set" src={LogoJs}></img>
                    <p>JavaScript</p>
                    </Col>
                    <Col xs={12} sm={6} md={3} >
                    <img className="logo-skill-set" src={LogoReact}></img>
                    <p>ReactJS</p>
                    </Col>
                    <Col xs={12} sm={6} md={3} >
                    <img className="logo-skill-set" src={LogoNode}></img>
                    <p>NodeJs</p>
                    </Col>
                    <Col xs={12} sm={6} md={3} >
                    <img className="logo-skill-set" src={LogoType}></img>
                    <p>TypeScript</p>
                    </Col>
                    <Col xs={12} sm={6} md={3} >
                    <img className="logo-skill-set" src={LogoGit}></img>
                    <p>Git</p>
                    </Col>
                    <Col xs={12} sm={6} md={3} >
                    <img className="logo-skill-set" src={LogoHtml}></img>
                    <p>Html</p>
                    </Col>
                    <Col xs={12} sm={6} md={3} >
                    <img className="logo-skill-set" src={LogoCss}></img>
                    <p>Css</p>
                    </Col>
                    <Col xs={12} sm={6} md={3} >
                    <img className="logo-skill-set" src={LogoFlutter}></img>
                    <p>Flutter</p>
                    </Col>
                    <Col xs={12} sm={6} md={3} >
                    <img className="logo-skill-set" src={LogoDart}></img>
                    <p>Dart</p>
                    </Col>
                    <Col xs={12} sm={6} md={3} >
                    <img className="logo-skill-set" src={LogoBoostrap}></img>
                    <p>Boostrap</p>
                    </Col>
                    <Col xs={12} sm={6} md={3} >
                    <img className="logo-skill-set" src={LogoSql}></img>
                    <p>Sql</p>
                    </Col>
                    <Col xs={12} sm={6} md={3} >
                    <img className="logo-skill-set" src={LogoDjango}></img>
                    <p>Django</p>
                    </Col>
                </Row>
            </Container>
        </section>
      )

}

export default SkillSet;
