import React,{useState} from 'react';
import './Components/assets/css/style.css';
import Header from './Components/Header/Header'

function App() {
  let [imprimir,setImprimir]=useState({
    propiedad1:"Hola Muchachas",
    propiedad2:"Ya vamonos"
  })
  let [opciones,setOpciones]=useState(false)
  
  let handleOpciones=()=>{
    setOpciones(true)
  }

  return (
    <div className="App">
      <Header 
      imprimir={imprimir}
      handleOpciones={handleOpciones}
      opciones={opciones}
      />
    </div>
  );
}

export default App;
