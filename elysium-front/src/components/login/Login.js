import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import styles from './Login.module.css'; // Importando o CSS Module

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate(); // Hook para navegação
  const [error, setError] = useState(null); // Estado para mensagens de erro

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulação de autenticação (troque por uma API real se necessário)
    if (email === "admin@teste.com" && password === "123456") {
      login({ email });
      navigate("/"); // Redireciona para Home
    } else {
      setError("Credenciais inválidas"); // Exibe o erro se as credenciais forem inválidas
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          className={styles.inputField}
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          className={styles.inputField}
          type="password" 
          placeholder="Senha" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        {error && <div className={styles.alert}>{error}</div>}
        <button className={styles.submitButton} type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
