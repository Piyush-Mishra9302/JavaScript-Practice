
import { createRoot } from 'react-dom/client'
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <ThemeProvider>
      <App />
    </ThemeProvider>
)
