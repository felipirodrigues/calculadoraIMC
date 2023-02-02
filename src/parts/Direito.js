import Estilo from '../assets/css/Estilo.module.css'
import { niveis, calcularIMC } from '../helpers/imc'
import { GridItem } from '../componentes/gridItem'

const Direito = () => {
  return(
    <div className={Estilo.grid}>
      {niveis.map(
        (item, key) => (
          <GridItem key={key} item={item}/>
        )
      )}
      
    </div>
  )
}
// tes
export default Direito