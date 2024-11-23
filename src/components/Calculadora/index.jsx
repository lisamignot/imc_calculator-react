import { useState } from 'react';
import styles from './Calculadora.module.css';

const Calculadora = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultado, setResultado] = useState('');    
    
    const calcularIMC = () => {
        const alturaCorreta = altura > 10 ? altura / 100 : altura;
        const imc = peso && altura ? (peso / (alturaCorreta ** 2)).toFixed(1) : null;
        
        if (imc) {
            let mensagem = '';
            if (imc < 18.5) {
                mensagem = "abaixo do peso";
            } else if (imc >= 18.5 && imc <= 24.9) {
                mensagem = "peso normal";
            } else if (imc >= 25 && imc <= 29.9) {
                mensagem = "acima do peso";
            } else if (imc >= 30 && imc <= 34.9) {
                mensagem = "obesidade grau 1";
            } else if (imc >= 35 && imc <= 39.9) {
                mensagem = "obesidade grau 2";
            } else if (imc >= 40 && imc <= 49.9) {
                mensagem = "obesidade grau 3";
            } else if (imc >= 50 && imc <= 59.9) {
                mensagem = "obesidade grau 4";
            } else {
                mensagem = "obesidade grau 5";
            }
            setResultado(`${imc} - ${mensagem}`);
        }
    };

    const limparCampos = () => {
        setAltura('');
        setPeso('');
        setResultado('');   
    };

    return (
        <div className={styles.calculadora}>
            <h1 className={styles.calcTitulo}>Calculadora IMC</h1>
            <div className={styles.calcInput}>
                <input className={styles.input} type="number" placeholder='Insira seu peso:' value={ peso } onChange={e => setPeso(parseFloat(e.target.value))}/>
                <input className={styles.input} type="number" placeholder='Insira sua altura:' value={ altura } onChange={e => setAltura(parseFloat(e.target.value))} />
            </div>

            <div className={styles.calcresultado}><p>hhh<span><strong>{ resultado }</strong></span></p></div>

            <div className={styles.btn}>
                <button className={styles.resetBtn} onClick={ limparCampos }>LIMPAR</button>
                <button className={styles.resultadoBtn} type="submit" onClick={ calcularIMC }>CALCULAR</button>
            </div>
        </div>
    )
}

export default Calculadora;