import styles from './Calculadora.module.css';

const Calculadora = () => {
    
    return (
        <div className={styles.calculadora}>
            <h1>Calculadora IMC</h1>
            <input className={styles.calcInput} type="number" placeholder='Informe sua altura:' />
            <input className={styles.calcInput} type="number" placeholder='Informe seu peso:'/>
            <button className={styles.calcBotao} type="submit">CALCULAR</button>
        </div>
    )
}

export default Calculadora;