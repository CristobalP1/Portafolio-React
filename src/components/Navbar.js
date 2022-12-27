import {useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/svg/logo.svg'
import navGit from '../assets/svg/navGmail.svg'
import navInstagram from '../assets/svg/navInstagram.svg'
import navLinked from '../assets/svg/navTiktok.svg'


export const NavbarPage = () => {
    const [activateLink,setActivateLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
      const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
      }
        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
      setActivateLink(value)
    }

    return (
      <Navbar expand="lg" variant="dark" className={scrolled ? "scrolled" : "scrolled-x"}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt='Logo' className='logo'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"><span className='navbar-toggler-icon'></span></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Nav.Link href="#home" className={activateLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activateLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activateLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <Nav className='align-items-center'>
          <span className='navbar-text'>
                <div className='social-icon'>
                    <a href="https://www.instagram.com/cristobalpalaciosv/" target='_blank'><img src={navInstagram} alt="Instagram Logo"></img></a>
                    <a href="https://www.github.com/CristobalP1/" target='_blank'><img src={navGit} alt="git Logo"></img></a>
                    <a href="https://www.linkedin.com/in/cristobal-palacios-silva-3b833921b/" target='_blank'><img src={navLinked} alt="linked Logo"></img></a>
                </div>
              </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      )
}