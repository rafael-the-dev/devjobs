import { useRef } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import './styles.css';

const Header = () => {
    const buttonRef = useRef(null);
    const helper = (classToReplace, classToAdd) => {
        buttonRef.current.classList.remove(classToReplace);
        buttonRef.current.classList.add(classToAdd);
    };

    const sunIconClickHandler = () => {
        helper('justify-content-end', 'justify-content-start');
        document.querySelector('body').classList.remove('dark-mode');
    }

    const moonIconClickHandler = () => {
        helper('justify-content-start', 'justify-content-end');
        document.querySelector('body').classList.add('dark-mode');
    }

    const clickHandler = () => {
        buttonRef.current.classList.toggle('justify-content-start');
        buttonRef.current.classList.toggle('justify-content-end');
        document.querySelector('body').classList.toggle('dark-mode')
    };

    return (
        <Container as="header" fluid className="d-flex align-items-center justify-content-between w-100 px header
            bg-center bg-no-repeat bg-cover">
            <Link to="/" className="header__logo-container">
                <Image src={logo} fluid alt="Logo" className="d-block h-100" />
            </Link>
            <Container className="d-flex align-items-center w-auto px-0 mx-0 header__toggle-container">
                <span
                    className="me-3 bg-center bg-no-repeat bg-contain header__toggle-icon header__toggle-icon--sun" 
                    onClick={sunIconClickHandler}>
                </span>
                <button 
                    ref={buttonRef} 
                    className="bg-light border-0 rounded-pill me-3 d-flex justify-content-start 
                    align-items-center header__toggle-button" 
                    onClick={clickHandler}>
                    <span className="rounded-circle header__toggle-bullet"></span>
                </button>
                <span 
                    className="bg-center bg-no-repeat bg-contain header__toggle-icon header__toggle-icon--moon" 
                    onClick={moonIconClickHandler}>
                </span>
            </Container>
        </Container>
    );
};

export default Header;