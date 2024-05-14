

function Pessoa({nome,idade,profissao,foto}){
    return (
        <div>
            <img src={foto} alt={nome}/>
        <h2>nome:{nome}</h2>
        <p>idade:{idade}</p>
        <p>profissao:{profissao}</p>
    </div>
    )   
}

export default Pessoa