import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import './styles.css';
import data from '../../data.json';
import JobCard from '../../components/JobCard';
import { Link } from 'react-router-dom';

const Home = () => {
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
                            />
                        </Form.Group>
                        <Form.Group className="d-none d-sm-block form__group  bg-no-repeat form__group--location">
                            <Form.Control 
                                type="text" 
                                placeholder="Filter by location" 
                                className="form__location bg-transparent border-0" 
                            />
                        </Form.Group>
                        <Form.Group className="d-flex align-items-center justify-content-between form__group form__group--controllers">
                            <Form.Check type="checkbox" label="Full time only" className="d-none d-sm-block form__checkbox" />
                            <Button 
                                className="bg-center bg-no-repeat me-3 border-0 form__filter-button bg-transparent d-sm-none">
                            </Button>
                            <Button type="button" variant="primary" className="bg-center bg-no-repeat form__search">
                                <span className="d-none d-sm-block">Search</span>
                            </Button>
                        </Form.Group>
                    </Form>
                </Container>
                <Container as="section" fluid className="px mt-4">
                    <Row className="align-items-stretch">
                        {
                            data.map(item => (
                                <Col xs={12} sm={6} lg={4} xxl={3} as={Link} to={`/jobs/${item.id}`}
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