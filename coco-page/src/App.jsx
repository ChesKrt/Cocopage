import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bienvenido a Mi Página</h1>
        <p>Este es un sitio de inicio hecho con React.</p>
      </header>

      <main>
        <section>
          <h2>Sobre Nosotros</h2>
          <p>Somos una empresa dedicada a crear soluciones web modernas.</p>
        </section>

        <section>
          <h2>Servicios</h2>
          <ul>
            <li>Diseño Web</li>
            <li>Desarrollo Frontend</li>
            <li>Consultoría técnica</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© 2025 Mi Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
