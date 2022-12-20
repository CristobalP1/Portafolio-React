import Col from 'react-bootstrap/Col';

const ProjectsCard = ({title,description,imgUrl,codeUrl,viewUrl}) => {

  return (
       <Col sm={6} md={4}>
            <div className='proj-imgbx'>
                <img src={imgUrl}></img>
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className='proj-txtx-img mt-5 '>
                    <a href="#" className='m-4'><img src={codeUrl} alt="Instagram Logo"></img></a>
                    <a href="#"><img src={viewUrl} alt="Tiktok Logo"></img></a>
                    </div>
                </div>
            </div>
       </Col>
  );
}

export default ProjectsCard;