
import styles from './Services.module.css'

import { useState } from 'react'
import Container from '../layout/Container'

function Services() {
  const [showServiceForm, setShowServiceForm] = useState(false)
 
  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }

  return (
    <div className={styles.service_form_container}>
      <h2>Adicionar um servico:</h2>
      <button className={styles.btn} onClick={toggleServiceForm}>
        {!showServiceForm ? 'Editar projeto' : 'Fechar'}
      </button>
      <div className={styles.project_info}>
        {showServiceForm && <div>formulário do serviço</div>}
      </div>
      <h2>Serviços</h2>
      <Container customClass="start">
        <p>Serviços</p>
      </Container>
    </div>

  )
}

export default Services