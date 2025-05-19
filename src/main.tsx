// src/main.tsx
// Entry point for the React application; mounts the <App> component.
// This file is not responsible for UI components or styling.

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
