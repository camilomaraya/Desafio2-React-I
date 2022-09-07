import Login from "./components/Login";
import Btn from "./components/Button";
import Title from "./components/Title";
import { useState } from "react";
import './index.css'



function App(){
  const [user, setUser] = useState("");
  const [password, setPassword] = useState ("");
  const clickbtn = password === "252525";
  

  const validarLogin = (e) =>{
    e.preventDefault();
    if (user === ""){
      alert("Ingresa tu usuario")
    }
  };

  return (
    <div className="App">
      <div className="titulo">
        <Title/>
      </div>
      <form onSubmit={validarLogin}>
        <div>
          <Login
            user={user}
            setUser={setUser}
            password={password}
            setPassword={setPassword}
          />
        </div>
        <div className="d-grid mb-4">
        <Btn clickbtn={clickbtn} /> 
        </div>
      </form>
    </div>
    );
}

export default App;