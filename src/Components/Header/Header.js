import React from 'react';

function Header({imprimir,opciones,handleOpciones}){
    return(
        <div>{opciones
            ?
            <h1 className={"title"}>{imprimir.propiedad1}</h1>
            :<h1 className={"title"}>{imprimir.propiedad2}</h1>
            }
            <button onClick={handleOpciones}>Haz Click</button>
        </div>
    )
}
export default Header;