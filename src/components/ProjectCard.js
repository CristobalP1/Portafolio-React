import Col from 'react-bootstrap/Col';
import codeSvg from '../assets/svg/code.svg';
import viewSvg from '../assets/svg/show.svg';
import NoviewSvg from '../assets/svg/noView.svg';

const ProjectsCard = ({title,description,imgUrl,code,view}) => {

  return (
       <Col sm={6} md={4}>
            <div className='proj-imgbx'>
                <img src={imgUrl}></img>
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className='proj-txtx-img mt-5 '>
                    <a href={code} target="_blank"><img src={codeSvg}></img></a>
                    {
                      view === "" ? <a className="project-noView"><img src={NoviewSvg}></img></a> : <a href={view} target="_blank"><img src={viewSvg} alt="Tiktok Logo"></img></a> 
                    }
                    </div>
                </div>
            </div>
       </Col>
  );
}

export default ProjectsCard;