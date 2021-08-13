import { Container } from 'react-bootstrap';
import Header from '../../components/Header';
import './styles.css';

const Home = () => {
    return (
        <>
            <Header />
            <Container as="main" fluid className=""></Container>
        </>
    );
};

export default Home;