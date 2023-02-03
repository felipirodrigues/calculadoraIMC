import { niveis, calcularIMC } from "../../helpers/imc";
import Estilo from "../../assets/css/Estilo.module.css"
import EstiloGrid from './GridItem.module.css'
import upImagem from '../../assets/images/up.png'
import downImagem from '../../assets/images/down.png'

export const GridItem = ({item}) => {
  return (
    <div className={EstiloGrid.main} style={{backgroundColor: item.cor}}>
      <div className={EstiloGrid.icon}> 
        {item.icone === 'up' && <img src={upImagem} alt="" width='30'/>}
        {item.icone === 'down' && <img src={downImagem} alt="" width='30'/>}
      </div>
      <div className={EstiloGrid.titulo}> 
        {item.titulo}
      </div>

      {item.seuImc && 
        <div className={Estilo.seuimc} style={{marginTop: '10px'}}>
          O seu IMC é de {item.seuImc} kg/m2
        </div>
      }

      <div className={EstiloGrid.info}> 
        <>
          IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  )
}