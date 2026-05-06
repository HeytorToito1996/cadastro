import { useState } from "react";
import "./App.css";

function App() {
    const [usuario,setUsuario] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    
    async function handleSubmit(event) {
      event.preventDefault();

      const dados = {
        usuario,
        email,
        senha
      }

      try {
        const resposta = await fetch("http://localhost:3000/api/",{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringfy(dados),
        });
        const resultado = await resposta.json();
        alert('Cadastro Realizado com Sucesso');

        setUsuario("");
        setEmail("");
        setSenha("");
      } catch (error) {
        alert("erro ao cadastrar");   
      }

      
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
