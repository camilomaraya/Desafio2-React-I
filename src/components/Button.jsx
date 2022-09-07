import Button from 'react-bootstrap/Button';

const Btn = ({clickbtn}) =>{
    return(
        <Button variant="primary" size="lg" type="submit" disabled = {!clickbtn}>Ingresa</Button>
        )
};

export default Btn;