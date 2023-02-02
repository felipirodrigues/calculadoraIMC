import Estilo from './assets/css/Estilo.module.css'
import Cabeçalho from './parts/Cabecalho'
import Direito from './parts/Direito'
import Esquerdo from './parts/Esquerdo'
function App() {
  return (
    <div className={Estilo.app}>
      <div className={Estilo.cabecalho}>
        <Cabeçalho />
      </div>
      <div className={Estilo.container}>
        <div className={Estilo.esquerdo}>
          <Esquerdo />
        </div>
        <div className={Estilo.direito}>
          <Direito />
        </div>
      </div>
    </div>
  );
}

export default App;
