import { useState } from 'react'
import Estilo from '../assets/css/Estilo.module.css'
import {niveis, calcularIMC} from '../helpers/imc'

const Esquerdo = () => {
  const listaIMC = ['Abaixo', 'Ideal', 'Acima', 'Obesidade']

  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [imc, setIMC] = useState(0)

  const addAltura = (valor) => {
    setAltura(valor.target.value)
  }

  const addPeso = (valor) => {
    setPeso(valor.target.value)
  }

  return(
    <div>
      <h1>Calcule seu IMC.</h1>
      <p>
        IMC é a sigla para Índice de Massa Corpórea, parâmetro
        adotado pela Organização Mundial de Saúde para
        calcular o peso ideal de cada pessoa.
      </p>
      <form>
        <input 
            type="number"
            placeholder='Digite sua altura. Ex 1.75 (em metros)'
            value={altura>0 ? altura : ''}
            onChange={addAltura}        
        />
        <input 
            type="number"
            placeholder='Digite seu peso. Ex 75.5 (em kg)'
            value={peso>0 ? peso : ''}
            onChange={addPeso}        
        />
        <button onClick={calcularIMC}>Calcular</button>
      </form>   
      <div>
        <hr/>
        O resultado é {imc}
      </div>
    </div>
  )
}

export default Esquerdo