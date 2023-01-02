import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ColorShap2 from '../assets/svg/msg.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {DB_HOST,formInitialDetails,DB_USER,DB_PASS} from '../helpers/auth';
import { Buffer } from 'buffer';

const ContactPages = () => {

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category,value) => {
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    const base64encodedData = Buffer.from(`${DB_USER}:${DB_PASS}`).toString('base64');
    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch(`${DB_HOST}`,{
            method:"POST",
            headers:new Headers({
                "Authorization": "Basic " + `${base64encodedData}`,
                "Content-Type":"application/json",
            }),
            body: JSON.stringify(formDetails),
        }).then((response) => {
            if (response.status === 200) {
                setStatus({success: true, message:'Message sent successfully'});
            } else {
                setStatus({success: false, message:'Something went wrong, please try again later.'});
            }
        })
        .catch((err) => {
            setStatus({success: false, message:`Something went wrong, please try again later.`})
    });
        setButtonText("Send");
        setFormDetails(formInitialDetails);
    };

  return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center row-skill-set justify-content-center contact-body'>
                    <Col lg={6} md={12}><img src={ColorShap2} alt='Contact Us' className='img-contact'></img></Col>
                    <Col lg= {6} md={12} className='mt-5'>
                    <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <h2>Get In Touch</h2>
                        </div>}
                        </TrackVisibility>
                        <form onSubmit={handleSubmit}>
                            <Row className='mt-4 g-4 field p-4'>
                                <Col sm={12} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e)=>onFormUpdate('firstName',e.target.value)}></input>
                                </Col>
                                <Col sm={12} className='px-1'>
                                <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e)=>onFormUpdate('lastName',e.target.value)}></input>
                                </Col>
                                <Col sm={12} className='px-1'>
                                <input type='email' value={formDetails.email} placeholder='Email' onChange={(e)=>onFormUpdate('email',e.target.value)}></input>
                                </Col>
                                <Col sm={12} className='px-1'>
                                <input type='tel' value={formDetails.phone} placeholder='Phone' onChange={(e)=>onFormUpdate('phone',e.target.value)}></input>
                                </Col>
                                <Col className='mt-4 div-area'>
                                    <Row>
                                        <Col lg={12} className='mt-4'>
                                        <textarea value={formDetails.message} placeholder='Message' onChange={(e)=>onFormUpdate('message',e.target.value)}></textarea>
                                        </Col>
                                        <Col lg={12} className='mt-4'>
                                            <button type='submit'><span>{buttonText}</span></button>
                                        </Col>
                                    </Row>
                                </Col>
                                {
                                    status.message &&
                                    <Col >
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
  );
}

export default ContactPages;