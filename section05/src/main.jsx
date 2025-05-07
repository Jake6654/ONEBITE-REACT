import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 모든 컴포넌트의 조상이되는 App 컴포넌트를 root component 라고 부름
createRoot(document.getElementById('root')).render(
    <App />
);
