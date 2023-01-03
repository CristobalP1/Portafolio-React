import Col from 'react-bootstrap/Col';

function CardSkill({img,title}) {
  return (
        <Col xs={12} sm={6} md={3}>
            <div className='card-skill-logo'>
                <img className="logo-skill-set" src={img}></img>
                <p>{title}</p>
            </div>
        </Col>
  );
}

export default CardSkill;