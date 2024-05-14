import styles from './Frase.Module.css'

function frase(){
    return(
        <div ClassName={styles.FraseContainer}>
            <p ClassName ={styles.FraseContent}>esse e um componente com uma frase</p>
        </div>
    )
}

export default frase