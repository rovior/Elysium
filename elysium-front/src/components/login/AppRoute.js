import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // Verifica o estado de autenticação

  // Se o usuário estiver logado, renderiza os filhos (Dashboard); caso contrário, redireciona para login.
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
