
import { createRoot } from 'react-dom/client'
import LoginContext from './LoginContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<LoginContext>
  <App/>
</LoginContext>
)
