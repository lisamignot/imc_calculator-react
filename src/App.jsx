import Fundo from "./assets/imgFundo.png"
import Calculadora from "./components/Calculadora";

function App() {
    return (
    <div className='container'>
      <img className='imgFundo' src={ Fundo } alt="" />

      <Calculadora />
  </div>
  )
}

export default App
