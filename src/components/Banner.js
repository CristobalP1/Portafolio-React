import {useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/svg/logo.svg';
import planet from '../assets/img/universe.jpg';

const BannerSection = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate =["Web Developer", "Web Designer", "UI/UX Designer"]
    const [text, setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

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
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{'hi im developer '}<span className="wrap">{text}</span></h1>
                        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore "</p>
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
