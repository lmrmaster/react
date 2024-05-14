import Item from './Item'

function List(){
    return(
        <>
            <h1>minha lista</h1>
            <ul>
            <Item marca="ferrari" ano_lancamento={1995}/>
            <Item marca="fiat" ano_lancamento={1984}/>
            <Item marca="renault" ano_lancamento={2000}/>
            </ul>

        </>
    )
}

export default List