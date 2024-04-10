import { globalContext } from "./context/globalContext"
import FormularioIngreso from "./components/FormularioIngreso"
import ModalActualizar from "./components/ModalActualizar"
import TablaPersonas from "./components/TablaPersonas"

import { useContext } from "react"
import ModalNotificacion from "./components/ModalNotificacion"
import ModalConfirmacion from "./components/ModalConfirmacion"

function App() {
  
  const{showModal,showModalNotificacion,showModalConfirmacion}=useContext(globalContext)

  return (
    <div>
      {showModal? <ModalActualizar /> : ''}
      {showModalNotificacion? <ModalNotificacion /> : ''}
      {showModalConfirmacion? <ModalConfirmacion /> : ''}
      <div className="flex justify-center items-center h-screen flex-col gap-5">
        
        
        <TablaPersonas/>
      </div>
    </div>

  )
}

export default App
