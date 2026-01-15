import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'animate.css';
import { NaveContextProvider } from './hooks/NaveContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NaveContextProvider>
      <App />
    </NaveContextProvider>
  </React.StrictMode>,
)
