import Estilo from './assets/css/Estilo.module.css'
import Cabeçalho from './parts/Cabecalho'
import { GridItem } from './componentes/gridItem'
import { niveis, calcularIMC } from './helpers/imc'
import { useState } from 'react'
import setaVoltar from './assets/images/leftarrow.png'

function App() {

  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [mostrador, setMostrador] = useState(null)

  const addAltura = (valor) => {
    setAltura(valor.target.value)
  }

  const addPeso = (valor) => {
    setPeso(valor.target.value)
  }

  const calcularBotao = () => {
    if (altura && peso){
      setMostrador(calcularIMC(altura, peso))
    }
    else{
      alert("Digite todos os campos")
    }
  }

  const botaoVoltar = () => {
    setMostrador(null)
    setAltura('')
    setPeso('')
  }


  return (
    <div className={Estilo.app}>
      <div className={Estilo.cabecalho}>
        <Cabeçalho />
      </div>
      <div className={Estilo.container}>
        <div className={Estilo.esquerdo}>
        <div>
            <h1>Calcule seu IMC.</h1>
            <p>
              IMC é a sigla para Índice de Massa Corpórea, parâmetro
              adotado pela Organização Mundial de Saúde para
              calcular o peso ideal de cada pessoa.
            </p>
            
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
              <button onClick={calcularBotao}>Calcular</button>
              
          </div>
        </div>
        <div className={Estilo.direito}>
          <div className={Estilo.grid}>
            {!mostrador &&
              niveis.map(
                (item, key) => (
                  <GridItem key={key} item={item}/>
                )
              )
            }
            {mostrador &&
              <div className={Estilo.direitoGrande}>
                <div className={Estilo.direitoFlexa} onClick={botaoVoltar}>
                  <img src={setaVoltar}/>
                </div>
                <GridItem item={mostrador}/>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
