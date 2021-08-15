import { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import data from '../../data.json';
import './styles.css';
import scoot from '../../assets/images/logos/scoot.svg';

const Detail = () => {
    //const getImage = name => require(`../../assets/images/logos/${name}`).default;
    const { id } = useParams();
    const history = useHistory();
    const [ job, setJob ] = useState({});

    useEffect(()=> {
        const result = data.filter(item => item.id === parseInt(id));
        if(result.length === 0) {
            history.push('/');
        }

        setJob(j => result[0])

    }, [ id, history ]);

    return (
        <>
            <Header />
            <Container as="main" fluid className="details-container px">
                <Container as="section" fluid className="rounded-3 position-relative job-header d-sm-flex transition dark-blue">
                    <div 
                        className="position-absolute top-0 start-50 translate-middle bg-center bg-no-repeat
                        job-header__icon" 
                        style={job ? { backgroundImage: `url(${scoot})`, backgroundColor: job.logoBackground} : {}}></div>
                    <div className="d-flex flex-column flex-sm-row align-items-center mt-3 mt-sm-0 job-header__content
                        align-items-sm-strecth justify-content-between flex-sm-grow-1">
                        <div className="text-center text-sm-start">
                            <h1 className="font-weight-7 d-white transition job-header__title">Scoot</h1>
                            <p className="transition d-grey job-header__site">scoot.com</p>
                        </div>
                        <Button as={Link} to="/" className="border-0 transition job-header__button">Company Site</Button>
                    </div>
                </Container>
            </Container>
            <Container as="footer" fluid className="footer d-flex justify-content-center px align-items-center details-container
                dark-blue transition justify-content-sm-between py-4">
                <div className="text-start d-none d-sm-inline-block">
                    <h2 className="footer__title font-weight-7 transition d-white">Senior Frontend Engineer</h2>
                    <p className="footer__description d-grey transition">So Digital Inc</p>
                </div>
                <Button className="border-0 apply-button footer__button">Company Site</Button>
            </Container>
        </>
    );
};

export default Detail;