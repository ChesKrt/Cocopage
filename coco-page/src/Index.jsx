import { useNavigate } from "react-router-dom";

function Index() {

    const navigate = useNavigate()

    const toSecondPage = () => {navigate('/SecondPage')}

  return (
    <div>
      <h1>Bienvenido a Mi Página de Inicio</h1>
      <p>Contenido personalizado aquí.</p>
      <button onClick={toSecondPage}>
        Ir a la segunda pagina
      </button>
    </div>
  );
}

export default Index;
