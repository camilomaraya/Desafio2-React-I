import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const Login = ({user,setUser,password,setPassword}) =>{
  return (
    <>
      <FloatingLabel controlId="floatingInput" label="Nombre" className='mb-3'>
        <Form.Control
          type="text"
          placeholder="Ingresa tu usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          style={{width:'400px'}}
        />
      </FloatingLabel>

      <FloatingLabel controlId='floatingPassword' label="Contraseña">
        <Form.Control 
          type="password"
          placeholder="Ingresa tu contraseña"
          inputMode="numeric" maxLength="6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FloatingLabel>
    </>     
    );
};

export default Login;