import { Card } from 'react-bootstrap';
import P from '../P'
import './styles.css';


const JobCard = ({ job }) => {
    const getImage = name => require(`../../assets/images/logos/${name}`).default;

    return (
        <Card className="w-100 position-relative border-0 rounded-3 py-4 px-2 job-card">
            <span className="position-absolute top-0 start-0 d-flex align-items-center 
                justify-content-center job-card__logo rounded-3 bg-center bg-no-repeat" 
                style={{ backgroundImage: `url(${getImage(job.logo)})`, backgroundColor: job.logoBackground}}>
            </span>
            <Card.Body className="job-card__body">
                <div className="job-card__">
                    <time className="me-3 job-card__info">{ job.postedAt }</time>
                    <span className="job-card__info">{ job.contract }</span>
                </div>
                <Card.Title className="mt-2 job-card__position">{ job.position }</Card.Title>
                <Card.Text className="job-card__info">{ job.company }</Card.Text>
            </Card.Body>
            <Card.Footer as="footer" className="border-0 bg-transparent">
                <P className="font-weight-7 job-card__location">{ job.location }</P>
            </Card.Footer>
        </Card>
    );
};

export default JobCard;