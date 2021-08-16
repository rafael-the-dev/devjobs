import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import Header from '../../components/Header';
import './styles.css';
import data from '../../data.json';
import JobCard from '../../components/JobCard';
import { Link } from 'react-router-dom';
import { useState, useRef, useMemo } from 'react';

const Home = () => {
    const [ title, setTitle ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ isFullTime, setIsFullTime ] = useState(false);
    const [show, setShow] = useState(false);
    const [ jobsQuantity, setJobsQuantity ] = useState(8);

    const titleRef = useRef(null);
    const locationRef = useRef(null);
    const isFullTimeRef = useRef(null);
    const isFullTimeMobileRef = useRef(null);
    const locationMobileRef = useRef(null);

    const headerMemo = useMemo(() => <Header />, [ ]);

    const handleClose = () => setShow(false);
    const filterClickHandler = () => setShow(true);

    const searchMobileClickHandler = () => {
        setTitle(t => titleRef.current.value);
        setLocation(l => locationMobileRef.current.value);
        setIsFullTime(f => isFullTimeMobileRef.current.checked);   
        setShow(false);
    };

    const modalMemo = useMemo(() => (
        <Modal show={show} onHide={handleClose} className="rounded-3 modal">
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body as="form" className="modal__form">
                <Form.Group className="bg-no-repeat modal__group--location">
                    <Form.Control 
                        type="text" 
                        placeholder="Filter by location" 
                        className="modal__location transition d-white bg-transparent border-0" 
                        ref={locationMobileRef}
                        key={Math.random() * 0.5}
                    />
                </Form.Group>
                <div className="d-flex flex-column align-items-start modal__controllers-container">
                    <Form.Check
                        type="checkbox" 
                        id="isFullTimeCheckMobile"
                        label="Full time only" 
                        className="modal__checkbox" 
                        ref={isFullTimeMobileRef}
                        key={Math.random() * 0.13}
                    />
                    <Button
                        type="button" 
                        className="mt-3 w-100 rounded-3 modal__search home-button"
                        onClick={searchMobileClickHandler}>
                        Search
                    </Button>
                </div>
            </Modal.Body>
      </Modal>
    ), [ show ])

    const filteredJobs = () => {
        let jobs = data;
        const titleLowerCased = title.toLowerCase();
        const locationLowerCased = location.toLowerCase();

        jobs = data.filter(item => {
            let companyName = item.company.toLowerCase();
            let position = item.position.toLowerCase();
            let itemLocation = item.location.toLowerCase();
            let contract = item.contract.toLowerCase();

            if(titleLowerCased && locationLowerCased && isFullTime) {
                if(((companyName === title) || (position === titleLowerCased)) && (itemLocation === locationLowerCased) && (contract === 'full time')) {
                    return true;
                }

                return false;
            } else if(titleLowerCased || locationLowerCased || isFullTime) {
                if(((companyName === titleLowerCased) || (position === titleLowerCased)) || (itemLocation === locationLowerCased) || (contract === 'full time')) {
                    return true;
                }

                return false;
            } else {
                return true;
            }
            
        });

        //setJobsQuantity(q => jobs.length);
        return jobs;
    };

    const searchClickHandler = () => {
        setTitle(t => titleRef.current.value);
        setLocation(l => locationRef.current.value);
        setIsFullTime(f => isFullTimeRef.current.checked);   
    };

    const loadClickHandler = () => {
        let quantity = jobsQuantity + 4;

        if(quantity > data.length) {
            quantity = data.length;
        }

        setJobsQuantity(q => quantity);
    };

    const formMemo = useMemo(() => (
        <Container as="section" fluid className="px w-100 search-section">
            <Form className="d-flex rounded-3 align-items-center transition dark-blue justify-content-between form">
                <Form.Group className="form__group bg-no-repeat form__group--title">
                    <Form.Control
                        type="text" 
                        placeholder="Filter by title, companies, expertises..." 
                        className="me-2 me-sm-0 transition form__title bg-transparent border-0" 
                        ref={titleRef}
                        key={Math.random() * 30}
                    />
                </Form.Group>
                <Form.Group className="d-none d-md-block form__group  bg-no-repeat form__group--location">
                    <Form.Control 
                        type="text" 
                        placeholder="Filter by location" 
                        className="form__location transition bg-transparent border-0" 
                        ref={locationRef}
                        key={Math.random()}
                    />
                </Form.Group>
                <Form.Group className="d-flex align-items-center justify-content-between form__group form__group--controllers">
                    <Form.Check
                        type="checkbox" 
                        id="isFullTimeCheck"
                        label="Full time only" 
                        className="d-none d-md-block form__checkbox" 
                        ref={isFullTimeRef}
                        key={Math.random() * 101}
                    />
                    <Button 
                        onClick={filterClickHandler}
                        className="bg-center bg-no-repeat me-3 border-0 form__filter-button home-button bg-transparent d-md-none">
                    </Button>
                    <Button
                        type="button" 
                        className="bg-center home-button bg-no-repeat form__search"
                        onClick={searchClickHandler}>
                        <span className="d-none d-sm-block">Search</span>
                    </Button>
                </Form.Group>  
            </Form>
        </Container>
    ), [ ]);

    return (
        <>
            { headerMemo }
            <Container as="main" fluid className="position-relative">
                { formMemo }
                <Container as="section" fluid className="px pb-5 mt-4">
                    <Row className="align-items-stretch">
                        {
                            filteredJobs().slice(0, jobsQuantity).map(item => (
                                <Col xs={12} sm={6} lg={4} xxl={3} as={Link} to={`/jobs/${item.id}`} key={item.id}
                                    className="mb-5 text-decoration-none">
                                    <JobCard job={item} />
                                </Col>
                            ))
                        }
                    </Row>
                    <Button className="home-button d-block load-more" onClick={loadClickHandler} >Load more</Button>
                </Container>
                { modalMemo }
            </Container>
        </>
    );
};

export default Home;