import {useState} from 'react'

function Form(){

    function cadastroUsuario(e){
        e.preventDefault()
        console.log('cadastrou o usuario!')
        console.log('usuario ${Name} foi cadastrado com a senha ${Password}')
    }

    const [Name, setNanme]=useState()
    const [Password,setPassword]=useState()



    return(
        <div>
            <h1>meu cadastro</h1>
            <form onSubmit={cadastroUsuario}>
                <div>
                    <label htmlFor="name:"></label>
                    <input type="text" id="Name" name="Name" placeholder ="digite o seu nome" onChange={(e)=>setNanme(e.target.value)}></input>
                    
                </div>
                <div>
                <label htmlFor="senha"></label>
                    <input type="Password" id="Password" name="password" placeholder ="digite a sua senha" onChange={(e)=>setPassword(e.target.value)}  ></input>
                </div>
                <div>
                    <input type="submit" value="cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form