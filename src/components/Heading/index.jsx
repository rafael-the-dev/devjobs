import './styles.css';

const H1 = ({ children, className }) => {
    return (
        <h1 className={`font-weight-7 text-center transition d-white h1 ${className}`}>{ children }</h1>
    );
};

const H2 = ({ children, className }) => {
    return (
        <h2 className={`font-weight-7 transition text-start d-white h2 ${className}`}>{ children }</h2>
    );
};

const H3 = ({ children, className }) => {
    return (
        <h3 className={`font-weight-6 text-center text-light h3 ${className}`}>{ children }</h3>
    );
};

export {
    H1,
    H2,
    H3
}