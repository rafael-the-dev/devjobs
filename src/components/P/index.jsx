import './styles.css'

const P = ({ children, className }) => {
    return (
        <p className={`${className} text-center text-white paragraph`}>{ children }</p>
    );
};

export default P;