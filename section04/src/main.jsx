import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' // App 함수를 가져오고

// render 메서드를 통해 App,jsx 에서 가저온 App 함수를 랜더링함
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
