import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppTarefas from './pages/Tarefas/AppTarefas.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppTarefas /> */}
    
    <App />

  </StrictMode>,
)
