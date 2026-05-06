import { useState } from "react";
import "./App.css";

function App() {
    const [usuario,setUsuario] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    
    function handleSubmit(event) {
      event.preventDefault();

      alert("Cadastro Realizado");
    }

    return(
      <div style={{maxWidth: "300px", margin:"50px auto" }}>
         <h2>Cadastro</h2>

         <form onSubmit={handleSubmit}>
            <div className="form-group">
               <label>Usuário</label><br />
               <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
            </div>

            <div className="form-group">
              <label>E-Mail</label><br />
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="form-group">
              <label>Senha</label><br/>
              <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </div>

            <br />

            <button type="submit">
              Cadastrar
            </button>
            
         </form>
      </div>
    );
}

export default App;
