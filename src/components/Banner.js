import {useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import planet from '../assets/img/moon.jpg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Button from 'react-bootstrap/Button';

const BannerSection = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate =["Web Developer", "Web Designer", "UI/UX Designer"]
    const [text, setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const presentation = "Hello, my name is Cristóbal, I welcome you to my portfolio, in which you will find my skills such as the programming languages ​​that I have mastered as well as my personal projects and projects where I have worked within a team of developers.";

    useEffect(()=>{
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length + 1);

        setText(updateText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updateText == fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

  return (
    <section className='banner' id='home'>
            <Container>
                <Row className="aling-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="welcome">Welcome to my Portfolio</span>
                        <h1>{'Hi i am a developer '}<span className="wrap">{text}</span></h1>
                        <p>{presentation}</p>
                        <div className='div-button'>
                        <Button className="tagline" variant="outline-dark" onClick={()=>{console.log('Holaa')}}><span>Let's go to my Github</span></Button>
                        <Button className="tagline" variant="outline-dark" onClick={()=>{console.log('Holaa')}}><span>Download my resume</span></Button>
                        </div>
                        </div>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={planet} alt="Headder Img" className='img'></img>
                    </Col>
                </Row>
            </Container>
        </section>
  );
}

export default BannerSection;
