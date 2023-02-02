import Estilo from '../assets/css/Estilo.module.css'
import { niveis, calcularIMC } from '../helpers/imc'
import { GridItem } from '../componentes/gridItem'
import { calcularBotao, mostrador } from '../parts/Esquerdo'

const Direito = () => {
  return(
    <div className={Estilo.grid}>
      {!mostrador &&
        niveis.map(
          (item, key) => (
            <GridItem key={key} item={item}/>
          )
        )
      }
      {mostrador &&
        <div>
          <GridItem item={mostrador}/>
        </div>
      }
    </div>
  )
}
// tes
export default Direito