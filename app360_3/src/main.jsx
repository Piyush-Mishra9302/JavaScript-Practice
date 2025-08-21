
import { createRoot } from 'react-dom/client'
import MyContext from './MyContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<MyContext>
  <App/>
</MyContext>
)
