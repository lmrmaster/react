function SeuNome({setNome}){
    return(
        <div>
            <p>digite o seu nome:</p>
            <input type="text" placeholder="qual e o seu nome?" onChange={(e)=>setNome}/>
        </div>
    )
}

export default SeuNome