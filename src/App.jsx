import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users/User';
import AppTarefas from './pages/Tarefas/AppTarefas';
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton';
import './tema.css'

function App() {

  return (

    <ThemeProvider>
      <BrowserRouter>

        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link> |
              </li>
              <li>
                <Link to="/about">About</Link> |
              </li>
              <li>
                <Link to="/tarefas">Tarefas</Link>
              </li>
              <li>
                <Link to="/users">Usuarios</Link>
              </li>
            </ul>
          </nav>

          <ThemeToggleButton />
        </div>


        {/* Define as rotas */}

        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/tarefas' element={<AppTarefas />} />
            <Route path='/users' element={<Users />} />
          </Routes>
        </div>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
