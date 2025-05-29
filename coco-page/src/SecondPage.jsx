import { useNavigate } from 'react-router-dom'

function SecondPage() {
    
  const navigate = useNavigate()

  return (
    <div>
      <h1>Segunda Página</h1>
      <p>Has navegado exitosamente.</p>
      <button onClick={() => navigate('/')}>
        Volver a la página de inicio
      </button>
    </div>
  )
}

export default SecondPage
