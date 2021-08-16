import { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import P from '../../components/P';
import { H2 } from '../../components/Heading';
import data from '../../data.json';
import './styles.css';

const Detail = () => {
    const getImage = name => require(`../../assets/images/logos/${name}`).default;
    const { id } = useParams();
    const history = useHistory();
    const [ job, setJob ] = useState({});

    useEffect(()=> {
        const result = data.filter(item => item.id === parseInt(id));
        if(result.length === 0) {
            history.push('/');
        }
        setJob(j => result[0]);

    }, [ id, history ]);

    return (
        <>
            <Header />
            <Container as="main" fluid className="details-container px">
                <Container as="section" fluid className="rounded-3 position-relative job-header d-sm-flex transition dark-blue">
                    <div 
                        className="position-absolute top-0 start-50 translate-middle bg-center bg-no-repeat
                        job-header__icon" 
                        style={job.logo ? { backgroundImage:  `url(${getImage(job.logo)})`, backgroundColor: job.logoBackground} : {}}></div>
                    <div className="d-flex flex-column flex-sm-row align-items-center mt-3 mt-sm-0 job-header__content
                        align-items-sm-strecth justify-content-between flex-sm-grow-1">
                        <div className="text-center text-sm-start">
                            <h1 className="font-weight-7 d-white transition job-header__title">Scoot</h1>
                            <p className="transition d-grey job-header__site">scoot.com</p>
                        </div>
                        <Button as={Link} to='/' className="border-0 mt-4 mt-sm-0 transition job-header__button">Company Site</Button>
                    </div>
                </Container>
                <Container as="section" fluid className="white-bg px-4 pt-5 pb-4 mt-3 px-sm-5 transition job-info  dark-blue">
                    <div className="d-flex align-items-start align-items-sm-center justify-content-between flex-column 
                    w-100 flex-sm-row">
                        <div>
                            <time className="job-info__time">{ job.postedAt } . { job.contract }</time>
                            <H2 className="job-info__title mt-2">{ job.position }</H2>
                            <p className="font-weight-7 job-info__location">{ job.location }</p>
                        </div>
                        <Button as={Link} to='/' className="border-0 mt-4 mt-sm-0 apply-button job-info__button">Apply now</Button>
                    </div>
                    <P className="mt-5">{ job.description }</P>
                </Container>
                <Container as="section" fluid className="requirements px-4 px-sm-5 white-bg transition dark-blue">
                    <H2 className="requirements__title">Requirements</H2>
                    <P className="mt-3 requirements__description">{ job.requirements && job.requirements.content }</P>
                    <ul className="mt-3 requirements__list">
                        { job.requirements && (job.requirements.items.map((item, index) => (
                            <li className="mb-3 d-flex align-items-start requirements__item grey-d transition" key={index}>{ item }</li>
                        )))}
                    </ul>
                </Container>
                <Container as="section" fluid className="role pb-4 px-4 px-sm-5 white-bg transition dark-blue">
                    <H2 className="role__title">What will you do</H2>
                    <P className="mt-3 role__description">{ job.role && job.role.content }</P>
                    <ul className="mt-3 role__list">
                        { job.role && (job.role.items.map((item, index) => (
                            <li className="mb-3 d-flex align-items-start role__item grey-d transition" key={index}>{ item }</li>
                        )))}
                    </ul>
                </Container>
            </Container>
            <Container as="footer" fluid className="footer d-flex justify-content-center px align-items-center details-container
                dark-blue transition justify-content-sm-between mt-5 py-4">
                <div className="text-start d-none d-sm-inline-block">
                    <H2 className="footer__title font-weight-7 transition d-white">{ job.position }</H2>
                    <p className="footer__description d-grey transition">So Digital Inc</p>
                </div>
                <Button as={Link} to='/' className="border-0 apply-button footer__button">Apply now</Button>
            </Container>
        </>
    );
};

export default Detail;