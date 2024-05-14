import {useState} from "react";

function Condicional(){

    const[email,setEmail]=useState()
    const[UserEmail,setUserEmail]=useState()
    

    function EnviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        
    }

    function LimparEmail (e){
        setUserEmail('')
    }
    
    return(
    <div>
        <h2>cadastre o seu email:</h2>
        <form>
            <input type="email" placeholder="digite o email"  onChange={(e)=>setEmail(e.target.value)}/>
            <button type="submit" onClick={EnviarEmail}>Enviar email </button>
            {UserEmail &&( 
                <div>
                    o email do usuario e:{UserEmail}
                    <button onClick={LimparEmail}>limpar o email</button>
                </div>
            )}
        </form>
    <div>
            <h1>rendenrizaçao de listas</h1>



    </div>
  </div>
 
)

}

export default Condicional