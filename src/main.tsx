import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'taos/style.css'
import taos from 'taos'
import './index.css'

taos.init()

createRoot(document.getElementById("root")!).render(<App />);
