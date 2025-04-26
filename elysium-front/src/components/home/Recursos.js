
import styles from './Recursos.module.css'

import spa0 from '../../img/spa.png';
import spa1 from '../../img/image2.png';
import spa2 from '../../img/image4.png';


function Recursos() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {/* Card do texto */}
        <div className={styles.element}>
          <div className={styles.card}>
            <div className="card-body">
              <h2>Veja nosso vídeo de apresentação</h2>
              <p className="card-text">
                Assista ao vídeo para saber mais sobre como o ComfortAid pode ajudar você a encontrar o melhor serviço de massagem e estética no conforto da sua casa.
              </p>
            </div>
          </div>
        </div>
        {/* Imagem separada, ao lado do card */}
        <img
          src={spa0}
          alt="Spa"
          className="img-fluid rounded"
          style={{ maxWidth: '100%', height: '100%' }}
        />
      </div>


      <div className={styles.wrapper}>
        {/* Imagem separada, ao lado do card */}
        <img
          src={spa1}
          alt="Spa"
          className="img-fluid rounded"
          style={{ maxWidth: '100%', height: '100%' }}
        />
        {/* Card do texto */}
        <div className={styles.element}>
          <div className={styles.card}>
            <div className="card-body">
              <h2>Veja nosso vídeo de apresentação</h2>
              <p className="card-text">
                Assista ao vídeo para saber mais sobre como o ComfortAid pode ajudar você a encontrar o melhor serviço de massagem e estética no conforto da sua casa.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.wrapper}>
        {/* Card do texto */}
        <div className={styles.element}>
          <div className={styles.card}>
            <div className="card-body">
              <h2>Veja nosso vídeo de apresentação</h2>
              <p className="card-text">
                Assista ao vídeo para saber mais sobre como o ComfortAid pode ajudar você a encontrar o melhor serviço de massagem e estética no conforto da sua casa.
              </p>
            </div>
          </div>
        </div>
        {/* Imagem separada, ao lado do card */}
        <img
          src={spa2}
          alt="Spa"
          className="img-fluid rounded"
          style={{ maxWidth: '100%', height: '100%' }}
        />
      </div>
    </section>
    
  )
}

export default Recursos;