import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './registerloginpagecss/style.css'
import {BrowserRouter} from 'react-router-dom'
import {SearchProvider} from './context/searchContext.jsx' 
import {AuthProvider} from './context/authContext.jsx'
import 'antd/dist/reset.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <SearchProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </SearchProvider>
  </AuthProvider>
)
