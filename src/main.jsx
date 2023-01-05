import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {LanguageContaxtProvider} from './context/LanguageContext'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <LanguageContaxtProvider>
      <App />
  </LanguageContaxtProvider>

    
  </React.StrictMode>
)
