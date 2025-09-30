import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FunctionalComponent from './FunctionalComponent.jsx'
import LifecycleClassComponent from './LifecycleClassComponent.jsx'                          
import LifecycleFunctionalComponent from './LifecycleFunctionalComponent.jsx' 

const firstNames = ["John", "Jane", "Doe", "Smith"];
const lastNames = ["Doe", "Smith", "Johnson", "Brown"];


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />     */}

{firstNames.map((first, index) => (
      <FunctionalComponent
        key={index}
        name={first}
        secondName={lastNames[index]}
      />
    ))}
  <LifecycleClassComponent />
  <LifecycleFunctionalComponent/>
  
  </StrictMode>
);
