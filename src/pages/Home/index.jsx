import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import './styles.css';
import data from '../../data.json';
import JobCard from '../../components/JobCard';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Home = () => {
    const [ title, setTitle ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ isFullTime, setIsFullTime ] = useState(false);
    const titleRef = useRef(null);
    const locationRef = useRef(null);
    const isFullTimeRef = useRef(null);


    const filteredJobs = () => {
        let jobs = data;
        const titleLowerCases = title.toLowerCase();
        const locationLowerCased = location.toLowerCase();

        jobs = data.filter(item => {
            let companyName = item.company.toLowerCase();
            let position = item.position.toLowerCase();
            let itemLocation = item.location.toLowerCase();
            let contract = item.contract.toLowerCase();

            if(titleLowerCases && locationLowerCased && isFullTime) {
                if(((companyName === title) || (position === titleLowerCases)) && (itemLocation === locationLowerCased) && (contract === 'full time')) {
                    return true;
                }

                return false;
            } else if(titleLowerCases || locationLowerCased || isFullTime) {
                if(((companyName === titleLowerCases) || (position === titleLowerCases)) || (itemLocation === locationLowerCased) || (contract === 'full time')) {
                    return true;
                }

                return false;
            } else {
                return true;
            }
            
        });

        return jobs;
    };

    const searchClickHandler = () => {
        setTitle(t => titleRef.current.value);
        setLocation(l => locationRef.current.value);
        setIsFullTime(f => isFullTimeRef.current.checked); 
    }

    useEffect(() => {
        const currentTitleRef = titleRef;
        const currentLocation = locationRef;
        const currentIsFullTimeRef = isFullTimeRef;
        return () => {
            currentTitleRef.current = null;
            currentLocation.current = null;
            currentIsFullTimeRef.current = null;
        }
    }, [ ]);

    return (
        <>
            <Header />
            <Container as="main" fluid className="position-relative">
                <Container as="section" fluid className="px w-100 search-section">
                    <Form className="d-flex rounded-3 align-items-center transition justify-content-between form">
                        <Form.Group className="form__group  bg-no-repeat form__group--title">
                            <Form.Control
                                type="text" 
                                placeholder="Filter by title, companies, expertises..." 
                                className="me-2 me-sm-0 form__title bg-transparent border-0" 
                                ref={titleRef}
                            />
                        </Form.Group>
                        <Form.Group className="d-none d-sm-block form__group  bg-no-repeat form__group--location">
                            <Form.Control 
                                type="text" 
                                placeholder="Filter by location" 
                                className="form__location bg-transparent border-0" 
                                ref={locationRef}
                            />
                        </Form.Group>
                        <Form.Group className="d-flex align-items-center justify-content-between form__group form__group--controllers">
                            <Form.Check
                                type="checkbox" 
                                id="isFullTimeCheck"
                                label="Full time only" 
                                className="d-none d-sm-block form__checkbox" 
                                ref={isFullTimeRef}
                            />
                            <Button 
                                className="bg-center bg-no-repeat me-3 border-0 form__filter-button bg-transparent d-sm-none">
                            </Button>
                            <Button
                                type="button" 
                                variant="primary" 
                                className="bg-center bg-no-repeat form__search"
                                onClick={searchClickHandler}>
                                <span className="d-none d-sm-block">Search</span>
                            </Button>
                        </Form.Group>
                    </Form>
                </Container>
                <Container as="section" fluid className="px mt-4">
                    <Row className="align-items-stretch">
                        {
                            filteredJobs().map(item => (
                                <Col xs={12} sm={6} lg={4} xxl={3} as={Link} to={`/jobs/${item.id}`} key={item.id}
                                    className="mb-5 text-decoration-none">
                                    <JobCard job={item} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default Home;