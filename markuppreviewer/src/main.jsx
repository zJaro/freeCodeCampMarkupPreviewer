import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Editor from './components/Editor.jsx'
import Preview from './components/Previewer.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
    </App>
  </StrictMode>,
)
