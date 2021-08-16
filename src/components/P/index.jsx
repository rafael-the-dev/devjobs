import './styles.css'

const P = ({ children, className }) => {
    return (
        <p className={`${className} text-start paragraph grey-d transition`}>{ children }</p>
    );
};

export default P;