import Button from "./eventos/button"

function Evento(){
    
function MeuEvento(){
    console.log("ativando meu primeiro evento")
}

function SegundoEvento(){
    console.log("ativando meu segundo  evento")
}


    return(
       <div>
        <p>clique para disparar um evento</p>
        <Button event={MeuEvento} text="primeiro evento"/>
        <Button event={SegundoEvento} text="segundo evento"/>
       </div> 
    )
}

export default Evento